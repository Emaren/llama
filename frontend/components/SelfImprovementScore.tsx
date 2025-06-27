import React from "react";

interface Props {
  score: number; // 0 to 100
}

const SelfImprovementScore: React.FC<Props> = ({ score }) => {
  const getColor = () => {
    if (score > 80) return "green";
    if (score > 50) return "orange";
    return "red";
  };

  return (
    <div>
      <h4>Self-Improvement Score</h4>
      <p style={{ color: getColor(), fontWeight: "bold" }}>
        {score.toFixed(1)}%
      </p>
    </div>
  );
};

export default SelfImprovementScore;
