import React, { useState } from "react";

interface Memory {
  id: string;
  content: string;
}

interface Props {
  memories: Memory[];
}

const MemorySimulator: React.FC<Props> = ({ memories }) => {
  const [simulatedMemory, setSimulatedMemory] = useState<string>("");

  const simulateRecall = () => {
    if (memories.length > 0) {
      const randomIndex = Math.floor(Math.random() * memories.length);
      setSimulatedMemory(memories[randomIndex].content);
    }
  };

  return (
    <div>
      <h4>Memory Simulator</h4>
      <button onClick={simulateRecall}>Simulate Recall</button>
      {simulatedMemory && <p>Recalled Memory: {simulatedMemory}</p>}
    </div>
  );
};

export default MemorySimulator;
