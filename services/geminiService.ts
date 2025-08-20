import { GoogleGenAI } from "@google/genai";
import type { ImageFile } from './types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function runQuery(prompt: string, image?: ImageFile, systemInstruction?: string): Promise<string> {
    const model = 'gemini-2.5-flash';

    const parts: any[] = [{ text: prompt }];

    if (image) {
        parts.unshift({
            inlineData: {
                mimeType: image.mimeType,
                data: image.base64,
            },
        });
    }

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: { parts: parts },
            config: {
                systemInstruction: systemInstruction,
            },
        });
        
        return response.text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        if (error instanceof Error) {
            return `Failed to fetch response from Gemini: ${error.message}`;
        }
        return "An unknown error occurred while contacting the Gemini API.";
    }
}
