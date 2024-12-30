import OpenAI from "openai";
const apiKey = import.meta.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI(
    { apiKey: apiKey, dangerouslyAllowBrowser: true }
);

export const generateImage = (prompt: string) => openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
});