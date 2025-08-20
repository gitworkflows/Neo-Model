import type React from 'react';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
}

export interface Message {
  role: MessageRole;
  text: string;
  image?: string; // URL or base64 data URI for display
}

export interface Task {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  systemPrompt: string;
}

export interface ImageFile {
    file: File;
    preview: string; // base64 data URI
    base64: string; // base64 data
    mimeType: string;
}
