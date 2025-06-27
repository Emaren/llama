import React from "react";

interface MemoryDensity {
  topic: string;
  usage: number;
}

interface Props {
  densities: MemoryDensity[];
}

const MemoryDensityMap: React.FC<Props> = ({ densities }) => {
  return (
    <div>
      <h4>Memory Density Map</h4>
      <ul>
        {densities.map((d, idx) => (
          <li key={idx}>
            {d.topic}: {d.usage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryDensityMap;
