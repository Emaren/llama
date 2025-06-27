import React from "react";

interface BiasVector {
  id: string;
  name: string;
  magnitude: number;
}

interface Props {
  vectors: BiasVector[];
}

const BiasVectorViewer: React.FC<Props> = ({ vectors }) => {
  return (
    <div>
      <h2>Bias Vector Viewer</h2>
      <ul>
        {vectors.map((vector) => (
          <li key={vector.id}>
            {vector.name}: {vector.magnitude.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BiasVectorViewer;
