import React, { useEffect, useRef } from 'react';
import type { Message } from '../types';
import { MessageRole } from '../types';
import hljs from 'highlight.js';

interface MessageDisplayProps {
  message: Message;
  isLoading?: boolean;
}

const CodeBlock: React.FC<{ code: string; lang: string }> = ({ code, lang }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current && lang !== 'diff') {
            hljs.highlightElement(codeRef.current);
        }
    }, [code, lang]);

    if (lang === 'diff') {
        const lines = code.split('\n');
        return (
            <div className="bg-gray-950 rounded-lg my-2 font-mono text-sm">
                <div className="text-xs text-gray-400 px-4 py-1 border-b border-gray-700">diff</div>
                <pre className="p-4 overflow-x-auto">
                    {lines.map((line, i) => {
                        if (line.startsWith('+')) {
                            return (
                                <div key={i} className="flex bg-green-900/30">
                                    <span className="w-5 text-green-400 select-none text-center">+</span>
                                    <span className="text-green-300 pl-2 whitespace-pre-wrap">{line.substring(1)}</span>
                                </div>
                            );
                        }
                        if (line.startsWith('-')) {
                            return (
                                <div key={i} className="flex bg-red-900/30">
                                    <span className="w-5 text-red-400 select-none text-center">-</span>
                                    <span className="text-red-300 pl-2 whitespace-pre-wrap">{line.substring(1)}</span>
                                </div>
                            );
                        }
                        // For context lines (or file headers in a real diff)
                        return (
                            <div key={i} className="flex">
                                <span className="w-5 text-gray-500 select-none text-center"> </span>
                                <span className="text-gray-400 pl-2 whitespace-pre-wrap">{line}</span>
                            </div>
                        );
                    })}
                </pre>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 rounded-lg my-2">
            <div className="text-xs text-gray-400 px-4 py-1 border-b border-gray-700">{lang || 'code'}</div>
            <pre className="p-4 overflow-x-auto text-sm">
                <code ref={codeRef} className={`language-${lang}`}>{code}</code>
            </pre>
        </div>
    );
};


const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 p-2">
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
  </div>
);

const UserAvatar = () => (
    <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    </div>
);

const ModelAvatar = () => (
    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586l4.293-4.293a1 1 0 011.414 0z" />
        </svg>
    </div>
);


const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, isLoading = false }) => {
  const isUserModel = message.role === MessageRole.USER;
  
  const renderContent = () => {
    if (isLoading) {
      return <TypingIndicator />;
    }
    
    const parts = message.text.split(/(\`\`\`[\w-]*\n[\s\S]*?\n\`\`\`)/g);
    return parts.map((part, index) => {
      const match = part.match(/\`\`\`([\w-]*)\n([\s\S]*?)\n\`\`\`/);
      if (match) {
        const lang = match[1];
        const code = match[2];
        return <CodeBlock key={index} code={code} lang={lang} />;
      }
      return <p key={index} className="whitespace-pre-wrap">{part}</p>;
    });
  };

  return (
    <div className={`flex items-start gap-3 ${isUserModel ? 'justify-end' : 'justify-start'}`}>
      {!isUserModel && <ModelAvatar />}
      <div className={`max-w-xl rounded-xl px-4 py-3 ${isUserModel ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
        {message.image && (
          <img src={message.image} alt="User upload" className="max-w-xs rounded-lg mb-2" />
        )}
        {renderContent()}
      </div>
      {isUserModel && <UserAvatar />}
    </div>
  );
};

export { MessageDisplay };