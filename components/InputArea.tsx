import React, { useState, useRef, useCallback } from 'react';
import type { ImageFile } from '../types';

interface InputAreaProps {
  onSendMessage: (prompt: string, image?: ImageFile) => void;
  isLoading: boolean;
}

const fileToBase64 = (file: File): Promise<{ preview: string; base64: string; mimeType: string; }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(',')[1];
            resolve({ preview: result, base64, mimeType: file.type });
        };
        reader.onerror = (error) => reject(error);
    });
};

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<ImageFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const { preview, base64, mimeType } = await fileToBase64(file);
      setImage({ file, preview, base64, mimeType });
    }
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || (!prompt.trim() && !image)) return;
    onSendMessage(prompt, image);
    setPrompt('');
    removeImage();
    if(textareaRef.current) {
        textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="p-6 bg-gray-950 border-t border-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-2 flex items-end">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
          aria-label="Attach image"
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <div className="flex-1 mx-2 relative">
            {image && (
                <div className="absolute bottom-full left-0 mb-2 p-1 bg-gray-700 rounded-lg">
                    <img src={image.preview} alt="Preview" className="h-16 w-16 object-cover rounded" />
                    <button type="button" onClick={removeImage} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">&times;</button>
                </div>
            )}
            <textarea
                ref={textareaRef}
                value={prompt}
                onChange={handleTextAreaInput}
                onKeyDown={handleKeyDown}
                placeholder="Type a message or upload an image..."
                className="w-full bg-transparent p-2 pr-20 resize-none border-none focus:ring-0 text-gray-100 placeholder-gray-500 max-h-48"
                rows={1}
                disabled={isLoading}
            />
        </div>
        <button
          type="submit"
          disabled={isLoading || (!prompt.trim() && !image)}
          className="p-2 rounded-full transition-colors bg-blue-600 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-500"
          aria-label="Send message"
        >
            {isLoading ? (
                <div className="w-6 h-6 animate-spin rounded-full border-2 border-transparent border-t-white"></div>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            )}
        </button>
      </form>
    </div>
  );
};
export { InputArea };
