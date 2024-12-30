import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import {generateImage} from "../../api/queries.ts";

const MainPage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    // Initialize userId
    useEffect(() => {
        let storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            storedUserId = uuidv4(); // Generate new UUID
            localStorage.setItem('userId', storedUserId);
        }
        setUserId(storedUserId);
    }, []);

    const saveToLocalStorage = (newEntry: any) => {
        const existingUserData = JSON.parse(localStorage.getItem('userData') || '{}');

        existingUserData[userId] = existingUserData[userId] || { prompts: [] };
        existingUserData[userId].prompts.push(newEntry);

        localStorage.setItem('userData', JSON.stringify(existingUserData));
    };

    const generateImageCallback = useCallback(async (prompt: string) => {
        setIsLoading(true);
        return generateImage(prompt)
            .then(({ created, data }) => {
                const imageUrl = data[0]?.url;
                setImageUrl(imageUrl || '');
                const newEntry = {
                    created,
                    prompt,
                    imageUrl,
                };
                saveToLocalStorage(newEntry);
            })
            .catch((err) => console.error('Error generating image:', err))
            .finally(() => setIsLoading(false));
    }, [userId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            generateImageCallback(prompt);
        }
    };

    const goToHistory = () => {
        navigate(`/user/${userId}`);
    };

    return (
        <div>
            <h1>Image Generator</h1>
            <button onClick={goToHistory}>View History</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="prompt"
                    placeholder="Type an image prompt here"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {imageUrl && <img src={imageUrl} alt="Generated"/>}
            {!isLoading && !imageUrl && <p>No image generated.</p>}
        </div>
    );
};

export default MainPage;
