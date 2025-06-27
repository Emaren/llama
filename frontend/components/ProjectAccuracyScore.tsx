import React from "react";

interface Props {
  accuracy: number; // 0 to 100
}

const ProjectAccuracyScore: React.FC<Props> = ({ accuracy }) => {
  const getColor = () => {
    if (accuracy > 90) return "green";
    if (accuracy > 70) return "orange";
    return "red";
  };

  return (
    <div>
      <h4>Project Accuracy</h4>
      <p style={{ color: getColor(), fontWeight: "bold" }}>
        {accuracy.toFixed(2)}%
      </p>
    </div>
  );
};

export default ProjectAccuracyScore;
