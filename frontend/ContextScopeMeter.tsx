import React, { useState, useEffect } from "react";

interface Props {
  maxTokens: number;
  currentTokens: number;
}

const ContextScopeMeter: React.FC<Props> = ({ maxTokens, currentTokens }) => {
  const percentage = (currentTokens / maxTokens) * 100;

  return (
    <div>
      <h3>Context Scope Meter</h3>
      <progress value={currentTokens} max={maxTokens} />
      <p>
        {currentTokens} / {maxTokens} tokens used ({percentage.toFixed(1)}%)
      </p>
    </div>
  );
};

export default ContextScopeMeter;
