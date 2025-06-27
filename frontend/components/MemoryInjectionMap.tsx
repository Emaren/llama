import React from "react";

interface Injection {
  memoryId: string;
  influenceScore: number;
}

interface Props {
  injections: Injection[];
}

const MemoryInjectionMap: React.FC<Props> = ({ injections }) => {
  return (
    <div>
      <h4>Memory Injection Map</h4>
      <ul>
        {injections.map((inj) => (
          <li key={inj.memoryId}>
            Memory {inj.memoryId}: Influence {inj.influenceScore.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryInjectionMap;
