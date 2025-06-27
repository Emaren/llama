import React from "react";

interface Props {
  progress: number; // 0 to 100
}

const PromptLoadBar: React.FC<Props> = ({ progress }) => {
  return (
    <div>
      <h4>Prompt Load Progress</h4>
      <progress value={progress} max={100} style={{ width: "100%" }} />
      <p>{progress.toFixed(1)}%</p>
    </div>
  );
};

export default PromptLoadBar;
