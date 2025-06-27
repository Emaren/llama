import React from "react";

interface Score {
  category: string;
  score: number;
}

interface Props {
  scores: Score[];
}

const ProjectScoreCard: React.FC<Props> = ({ scores }) => {
  return (
    <div>
      <h4>Project Score Card</h4>
      <ul>
        {scores.map((score, idx) => (
          <li key={idx}>
            {score.category}: {score.score.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectScoreCard;
