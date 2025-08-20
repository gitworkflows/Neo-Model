import React from 'react';
import type { Task } from '../types';

interface HeaderProps {
  task: Task;
}

const Header: React.FC<HeaderProps> = ({ task }) => {
  return (
    <header className="p-6 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white">{task.name}</h2>
      <p className="text-gray-400">{task.description}</p>
    </header>
  );
};

export { Header };
