import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HistoryPage = () => {
    const { userId } = useParams<{ userId: string }>();
    const [userPrompts, setUserPrompts] = useState<any[]>([]);

    useEffect(() => {
        if (!userId) {
            console.error('User ID is not defined');
            return;
        }

        const userData = JSON.parse(localStorage.getItem('userData') || '{}');

        const prompts = userData[userId]?.prompts || [];
        setUserPrompts(prompts);
    }, [userId]);

    return (
        <div>
            <h1>User History</h1>
            <h2>History for User: {userId}</h2>
            <ul>
                {userPrompts.map((entry, index) => (
                    <li key={index}>
                        <p><strong>Created:</strong> {new Date(entry.created).toLocaleString()}</p>
                        <p><strong>Prompt:</strong> {entry.prompt}</p>
                        <p><strong>Image url:</strong> {entry.imageUrl}</p>
                    </li>
                ))}
            </ul>
            {userPrompts.length === 0 && <p>No history available.</p>}
        </div>
    );
};

export default HistoryPage;
