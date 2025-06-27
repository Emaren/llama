import React from "react";

interface Props {
  usedTokens: number;
  maxTokens: number;
}

const ScopeMeter: React.FC<Props> = ({ usedTokens, maxTokens }) => {
  const percent = (usedTokens / maxTokens) * 100;

  return (
    <div>
      <h4>Scope Meter</h4>
      <progress value={usedTokens} max={maxTokens} style={{ width: "100%" }} />
      <p>
        {usedTokens} / {maxTokens} tokens ({percent.toFixed(1)}%)
      </p>
    </div>
  );
};

export default ScopeMeter;
