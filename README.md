# MERN OCR App

This is a simple MERN (MongoDB, Express, React, Node.js) application that allows users to upload an image, which is then processed using **Tesseract.js** (an OCR library) to extract text from the image. The extracted text is displayed on the screen.

### Features:
- Upload an image file
- OCR (Optical Character Recognition) processing using **Tesseract.js**
- Display the extracted text from the image on the screen

## Sample Video

You can check out a sample of the app in action here:

[MERN OCR Sample Video](https://github.com/write-arsalan-nawaz/mern-chat-bot/blob/main/client/public/MERN-OCR-SAMPLE.mov)

---

## How to Run the App

### Prerequisites:
Ensure you have the following installed on your local machine:
- **Node.js** (v14 or later)
- **MongoDB**
- **npm** (Node Package Manager)

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/write-arsalan-nawaz/mern-chat-bot.git
   cd mern-chat-bot
   cd server
   npm install
   cd ..
   cd client
   npm install
   cd ..
   cd server
   npm start
   -> open new terminal
   cd client
   npm start

Navigate to http://localhost:3000 in your browser. You should be able to upload an image, and the OCR will process it and show the extracted text.

