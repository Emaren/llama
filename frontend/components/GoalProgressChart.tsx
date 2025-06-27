import React from "react";

interface Props {
  goalsCompleted: number;
  totalGoals: number;
}

const GoalProgressChart: React.FC<Props> = ({ goalsCompleted, totalGoals }) => {
  const progressPercent = (goalsCompleted / totalGoals) * 100;

  return (
    <div>
      <h4>Goal Progress Chart</h4>
      <div style={{ backgroundColor: "#eee", height: "20px", width: "100%" }}>
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            backgroundColor: progressPercent > 70 ? "#4caf50" : "#f44336",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
      <p>{progressPercent.toFixed(1)}% complete ({goalsCompleted} of {totalGoals})</p>
    </div>
  );
};

export default GoalProgressChart;
