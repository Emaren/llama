import React from "react";

interface Props {
  currentTokens: number;
  maxTokens: number;
}

const ContextScopeMeter: React.FC<Props> = ({ currentTokens, maxTokens }) => {
  const percentUsed = (currentTokens / maxTokens) * 100;

  return (
    <div>
      <h4>Context Scope Usage</h4>
      <progress value={currentTokens} max={maxTokens} />
      <p>
        {currentTokens} / {maxTokens} tokens ({percentUsed.toFixed(1)}%)
      </p>
    </div>
  );
};

export default ContextScopeMeter;
