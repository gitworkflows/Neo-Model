import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { InputArea } from './components/InputArea';
import { runQuery } from './services/geminiService';
import { MessageRole } from './types';
import type { Message, Task, ImageFile } from './types';
import { TASKS } from './constants';

function App(): React.ReactNode {
  const [selectedTask, setSelectedTask] = useState<Task>(TASKS[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectTask = useCallback((task: Task) => {
    setSelectedTask(task);
    setMessages([]);
    setError(null);
  }, []);

  const handleSendMessage = useCallback(async (prompt: string, image?: ImageFile) => {
    if (!prompt.trim() && !image) return;

    setError(null);
    const userMessage: Message = {
      role: MessageRole.USER,
      text: prompt,
      image: image?.preview,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemInstruction = `You are an expert in ${selectedTask.name}. ${selectedTask.systemPrompt}`;
      const responseText = await runQuery(prompt, image, systemInstruction);
      const modelMessage: Message = {
        role: MessageRole.MODEL,
        text: responseText,
      };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Error: ${errorMessage}`);
      const errorResponse: Message = {
        role: MessageRole.MODEL,
        text: `Sorry, I encountered an error. ${errorMessage}`
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTask]);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
      <Sidebar tasks={TASKS} selectedTask={selectedTask} onSelectTask={handleSelectTask} />
      <main className="flex flex-1 flex-col">
        <Header task={selectedTask} />
        <ChatWindow messages={messages} isLoading={isLoading} />
        {error && <div className="px-6 py-2 text-red-400 bg-red-900/50 text-sm">{error}</div>}
        <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;