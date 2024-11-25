import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('text', text);
        
        try {
            const response = await axios.post('/api/analyze', formData);
            setResult(response.data.extractedText);
            setError(null);
        } catch (error) {
            setError('Error uploading data');
            console.error('Error uploading data:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleSubmit}>Submit</button>
            {result && <div>Extracted Text: {result}</div>}
            {error && <div>{error}</div>}
        </div>
    );
};

export default App;
