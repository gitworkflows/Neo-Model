import React from 'react';
import type { Task } from '../types';

interface SidebarProps {
  tasks: Task[];
  selectedTask: Task;
  onSelectTask: (task: Task) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tasks, selectedTask, onSelectTask }) => {
  return (
    <aside className="w-64 bg-gray-950 p-4 flex flex-col border-r border-gray-800">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586l4.293-4.293a1 1 0 011.414 0z" />
            </svg>
        </div>
        <h1 className="text-xl font-bold text-white">Gemini Playground</h1>
      </div>
      <nav className="flex flex-col space-y-2">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => onSelectTask(task)}
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              selectedTask.id === task.id
                ? 'bg-blue-600/30 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {task.icon}
            <span className="ml-4 font-medium">{task.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export { Sidebar };
