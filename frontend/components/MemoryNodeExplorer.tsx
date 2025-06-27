import React from "react";

interface MemoryNode {
  id: string;
  content: string;
  connections: string[];
}

interface Props {
  nodes: MemoryNode[];
}

const MemoryNodeExplorer: React.FC<Props> = ({ nodes }) => {
  return (
    <div>
      <h4>Memory Node Explorer</h4>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <strong>{node.content}</strong>
            <p>Connections: {node.connections.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryNodeExplorer;
