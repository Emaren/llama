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
      <h4>Bias Vector Details</h4>
      <ul>
        {vectors.map((v) => (
          <li key={v.id}>
            {v.name}: {v.magnitude.toFixed(3)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BiasVectorViewer;
