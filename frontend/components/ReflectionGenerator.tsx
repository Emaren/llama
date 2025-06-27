import React, { useState } from "react";

interface Props {
  onGenerate: (prompt: string) => void;
}

const ReflectionGenerator: React.FC<Props> = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
      setPrompt("");
    }
  };

  return (
    <div>
      <h4>Reflection Generator</h4>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt for reflection..."
        rows={4}
        style={{ width: "100%" }}
      />
      <button onClick={handleGenerate}>Generate Reflection</button>
    </div>
  );
};

export default ReflectionGenerator;
