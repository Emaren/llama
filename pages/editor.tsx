import React, { useState } from 'react';

export default function EditorPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    // Placeholder: call backend API to process prompt
    setResponse('Processing prompt: ' + prompt);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LLM Code Editor</h1>
      <textarea
        rows={5}
        cols={60}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your code edit prompt here"
      />
      <br />
      <button onClick={handleSubmit}>Submit Prompt</button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  );
}
