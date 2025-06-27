import React from 'react';

interface Props {
  prompt: string;
  onChange: (newPrompt: string) => void;
}

export default function EditPromptBox({ prompt, onChange }: Props) {
  return (
    <textarea
      value={prompt}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type code edit prompt..."
      rows={4}
      style={{ width: '100%', fontFamily: 'monospace' }}
    />
  );
}
