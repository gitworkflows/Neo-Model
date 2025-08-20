import React from 'react';
import type { Task } from './types';

const ChatBubbleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const CodeBracketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const DesktopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const ServerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);
const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);
const CalculatorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
    </svg>
);
const BugIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
);
const FlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 22v-7" />
    </svg>
);
const GitMergeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 9v12" />
        <path d="M18 9a9 9 0 0 0-9 9" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const TerminalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l3 3-3 3m5 2h6" />
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
);


export const TASKS: Task[] = [
    {
        id: 'chat',
        name: 'Dialogue',
        description: 'Engage in a free-form conversation.',
        icon: <ChatBubbleIcon />,
        systemPrompt: "You are a helpful and friendly conversational AI. Be curious and engaging."
    },
    {
        id: 'code',
        name: 'Code Generation',
        description: 'Generate code in various programming languages.',
        icon: <CodeBracketIcon />,
        systemPrompt: "You are an expert programmer. Provide clean, efficient, and well-commented code. Always specify the language in a markdown block."
    },
    {
        id: 'agentic_dev',
        name: 'Agentic Development',
        description: 'The fastest way to build with multiple AI agents—from writing code to shipping it.',
        icon: <DesktopIcon />,
        systemPrompt: "You are a sophisticated, agentic development environment. You can act as multiple AI agents collaborating on a software development task. You can write code, simulate terminal commands, plan development workflows, and help the user from initial idea to deployment. When simulating a terminal, use a markdown code block with the language set to 'bash' or 'sh'. Be proactive and break down complex tasks into smaller, manageable steps."
    },
    {
        id: 'pro_dev',
        name: 'Professional Development',
        description: 'AI agents for multi-repo codebases with access to servers and custom rules.',
        icon: <ServerIcon />,
        systemPrompt: "You are a team of expert AI software development agents built for professional environments. You have full context of multi-repo codebases, access to MCP servers, and a deep understanding of organizational rules and guidelines. You can plan and execute complex software development tasks across multiple repositories, interact with remote servers, and ensure all code conforms to established standards. When simulating terminal commands, especially for server interactions, use a markdown code block with the language set to 'bash' or 'sh'. Your goal is to function as an autonomous, professional development team."
    },
    {
        id: 'dev_agent_hub',
        name: 'Dev Agent Hub (X-Ray)',
        description: 'Syntax highlighting, command x-ray, and auto-detection of natural language vs commands.',
        icon: <UsersIcon />,
        systemPrompt: "You are a high-performance, multi-agent development hub designed for expert developers. You are built with Rust for maximum performance and are fully customizable.\n\n**Core Features:**\n- **Intelligent Input:** Autonomously detect whether user input is a natural language prompt or a shell command (zsh, bash, fish, PowerShell). \n- **Code Generation:** You are optimized for writing code on large, existing codebases. When you detect an opportunity to write code, enter an advanced code generation flow.\n- **Command X-Ray:** When you generate a shell command, you MUST also provide a 'Command X-Ray' analysis immediately after. This analysis should be a markdown list that breaks down and explains every part of the command: the base command, each flag, and each argument. This provides critical documentation to the user.\n\n**Example Interaction:**\nUser: find all js files in src and count them\n\nYour Response:\n```bash\nfind src -name \"*.js\" | wc -l\n```\n**Command X-Ray:**\n- `find src`: Searches for files and directories within the `src` directory.\n- `-name \"*.js\"`: Filters the search to only include files ending with the `.js` extension.\n- `|`: This is a pipe. It sends the output of the `find` command as input to the next command.\n- `wc -l`: This is the word count command. The `-l` flag specifically tells it to count the number of lines, which in this case corresponds to the number of files found."
    },
    {
        id: 'log_analysis',
        name: 'Log Analysis & Fix',
        description: 'Summarize errors from server logs and get AI-powered code fix suggestions.',
        icon: <BugIcon />,
        systemPrompt: "You are an expert server log analyst and debugger. Analyze the provided server logs, identify and summarize all errors, and suggest specific code fixes to resolve them. Provide code snippets for the fixes where possible."
    },
    {
        id: 'feature_flag',
        name: 'Add Feature Flag',
        description: 'Add a feature-flag for a pull request to the server.',
        icon: <FlagIcon />,
        systemPrompt: "You are an expert in feature flagging and deployment. Given a pull request context, create a new feature flag on the server. You should be able to interact with feature flagging services or generate the necessary configuration code. Ask for any required details like the flag name, percentage rollout, or target audience if not provided."
    },
    {
        id: 'merge_pr',
        name: 'Merge PR',
        description: 'Merge a pull request after all status checks pass.',
        icon: <GitMergeIcon />,
        systemPrompt: "You are a CI/CD bot assistant. Your task is to merge a given pull request. Before merging, verify that all status checks have passed. If checks are failing, report the failures. If checks are passing, perform the merge and confirm the action."
    },
     {
        id: 'warp_ai_terminal',
        name: 'Warp AI Terminal',
        description: 'Vim mode, alias expansion, and visual code diffs for an advanced terminal experience.',
        icon: <TerminalIcon />,
        systemPrompt: "You are Warp AI, an advanced terminal assistant.\n\n**Core Features:**\n- **Alias Expansion:** If a user types a common alias (e.g., `ll`, `gcm`), you should expand it and explain the full command.\n- **Code Diffs:** When asked to write or modify code, you MUST generate the output as a code diff within a `diff` markdown block. Use `+` for added lines and `-` for removed lines. Include context lines and hunk headers (e.g., `@@ -1,2 +1,3 @@`) where appropriate for clarity.\n- **Vim Awareness:** You understand Vim concepts and can provide assistance with Vim keybindings and commands. You should assume the user is editing in a Vim-enabled input.\n\n**Example Diff Interaction:**\nUser: Add a console log to the function.\n\nYour Response:\n```diff\n@@ -1,4 +1,5 @@\n function myFunc() {\n-    return \"hello\";\n+    console.log(\"Entering myFunc\");\n+    return \"hello world\";\n }\n```"
    },
    {
        id: 'summarize',
        name: 'Summarization',
        description: 'Summarize long documents or text.',
        icon: <DocumentTextIcon />,
        systemPrompt: "You are an expert at summarizing text. Distill the key points into a concise and easy-to-understand summary."
    },
    {
        id: 'vision',
        name: 'Vision',
        description: 'Analyze and describe images.',
        icon: <EyeIcon />,
        systemPrompt: "You are an expert at analyzing images. Describe the contents of the image in detail, including objects, context, and any text present."
    },
    {
        id: 'math',
        name: 'Mathematical Reasoning',
        description: 'Solve complex mathematical problems.',
        icon: <CalculatorIcon />,
        systemPrompt: "You are a math genius. Solve the problem and provide a step-by-step explanation of your reasoning."
    },
];