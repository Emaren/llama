import React, { useState } from "react";

interface Memory {
  id: string;
  content: string;
}

interface Props {
  memories: Memory[];
}

const MemoryExplorer: React.FC<Props> = ({ memories }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMemories = memories.filter((memory) =>
    memory.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h4>Memory Explorer</h4>
      <input
        type="text"
        placeholder="Search memories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredMemories.map((memory) => (
          <li key={memory.id}>{memory.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryExplorer;
