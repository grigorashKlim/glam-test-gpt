# Image Generator App

This React-based application allows users to generate images from text prompts using OpenAI's DALL-E model. Users can view their generated images and track their prompt history. Each user has a unique ID and a separate history of generated images.

## Features

- **Generate Images**: Enter a prompt to generate an image using OpenAI's DALL-E API.
- **User-Specific History**: Each user has a unique ID stored in the browser's local storage. All generated images are saved in the history for that specific user.
- **History Page**: View the history of generated images, including the prompt used and the creation date.

## Installation

Ensure you have **Node.js** (version 22 or higher) and **npm** installed. Install all the required packages by running the following command in your project directory:

```bash
npm install
```

Create a .env file in the root of the project and add your OpenAI API key:
```
OPEN_AI_KEY=your-openai-api-key
```
Replace your-openai-api-key with your actual OpenAI API key.

Start the development server by running:

```bash
npm run dev
```

Open your browser and go to http://localhost:5173/ to start using the app.

## Usage
Enter a prompt (e.g., "a white siamese cat") in the input field and click Submit to generate an image. The generated image will appear below the input form. After generating an image, click on the History link to see your prompt history, including the generated images, their prompts, and creation dates.