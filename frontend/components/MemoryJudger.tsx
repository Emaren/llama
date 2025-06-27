import React from "react";

interface Memory {
  id: string;
  content: string;
  score: number;
}

interface Props {
  memories: Memory[];
  onJudge: (id: string, score: number) => void;
}

const MemoryJudger: React.FC<Props> = ({ memories, onJudge }) => {
  return (
    <div>
      <h4>Memory Judger</h4>
      <ul>
        {memories.map((memory) => (
          <li key={memory.id}>
            <p>{memory.content}</p>
            <button onClick={() => onJudge(memory.id, 1)}>Good</button>
            <button onClick={() => onJudge(memory.id, 0)}>Bad</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryJudger;
