import React from "react";

interface Memory {
  id: string;
  content: string;
  relevance: number;
}

interface Props {
  memories: Memory[];
  onPrune: (id: string) => void;
}

const MemoryPruner: React.FC<Props> = ({ memories, onPrune }) => {
  return (
    <div>
      <h4>Memory Pruner</h4>
      <ul>
        {memories.map((memory) => (
          <li key={memory.id}>
            {memory.content} (Relevance: {memory.relevance.toFixed(2)})
            <button onClick={() => onPrune(memory.id)}>Prune</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryPruner;
