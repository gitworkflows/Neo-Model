import React, { useEffect, useRef } from 'react';
import type { Message } from '../types';
import { MessageRole } from '../types';
import { MessageDisplay } from './MessageDisplay';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.length === 0 && !isLoading && (
        <div className="flex justify-center items-center h-full">
            <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1014.12 11.88a3 3 0 00-4.242 4.242z" />
                    </svg>
                </div>
                <p className="text-lg">Start the conversation</p>
                <p>Ask a question or upload an image to begin.</p>
            </div>
        </div>
      )}
      {messages.map((msg, index) => (
        <MessageDisplay key={index} message={msg} />
      ))}
      {isLoading && messages[messages.length - 1]?.role === MessageRole.USER && (
        <MessageDisplay message={{ role: MessageRole.MODEL, text: '' }} isLoading={true} />
      )}
    </div>
  );
};

export { ChatWindow };