import React from "react";

interface Memory {
  id: string;
  content: string;
  strength: number;
}

interface Props {
  memories: Memory[];
}

const MemoryDiffuser: React.FC<Props> = ({ memories }) => {
  return (
    <div>
      <h4>Memory Diffuser</h4>
      <ul>
        {memories.map((m) => (
          <li key={m.id}>
            {m.content} (Strength: {m.strength.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryDiffuser;
