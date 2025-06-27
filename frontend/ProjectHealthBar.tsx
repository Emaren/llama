import React from "react";

interface Props {
  healthPercent: number;
}

const ProjectHealthBar: React.FC<Props> = ({ healthPercent }) => {
  return (
    <div>
      <h3>Project Health</h3>
      <div style={{ backgroundColor: "#eee", width: "100%", height: "25px" }}>
        <div
          style={{
            width: `${healthPercent}%`,
            height: "100%",
            backgroundColor: healthPercent > 70 ? "#4caf50" : "#f44336",
            transition: "width 0.5s ease-in-out"
          }}
        />
      </div>
      <p>{healthPercent.toFixed(1)}% Healthy</p>
    </div>
  );
};

export default ProjectHealthBar;
