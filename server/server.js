const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ocr', { useNewUrlParser: true, useUnifiedTopology: true });

const ImageSchema = new mongoose.Schema({
    imageData: Buffer,
    extractedText: String,
    inputText: String
});

const Image = mongoose.model('Image', ImageSchema);

app.post('/api/analyze', upload.single('image'), (req, res) => {
    const { path } = req.file;
    const { text } = req.body;

    Tesseract.recognize(
        path,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text: extractedText } }) => {
        const newImage = new Image({
            imageData: fs.readFileSync(path),
            extractedText,
            inputText: text
        });

        newImage.save()
            .then(() => res.json({ extractedText }))
            .catch(err => res.status(500).json({ error: err.message }));
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));
