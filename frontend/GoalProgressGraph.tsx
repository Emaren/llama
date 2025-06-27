import React from "react";

interface Props {
  progressPercent: number;
}

const GoalProgressGraph: React.FC<Props> = ({ progressPercent }) => {
  return (
    <div>
      <h3>Goal Progress</h3>
      <div style={{ backgroundColor: "#ddd", width: "100%", height: "20px" }}>
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            backgroundColor: "#4caf50",
          }}
        />
      </div>
      <p>{progressPercent.toFixed(1)}% complete</p>
    </div>
  );
};

export default GoalProgressGraph;
