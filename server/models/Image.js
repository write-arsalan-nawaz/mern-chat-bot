const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    imageData: Buffer,
    extractedText: String,
    inputText: String
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;
