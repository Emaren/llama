import React from "react";

interface TokenStats {
  totalTokens: number;
  usedTokens: number;
  freeTokens: number;
}

interface Props {
  stats: TokenStats;
}

const TokenMonitor: React.FC<Props> = ({ stats }) => {
  return (
    <div>
      <h4>Token Monitor</h4>
      <p>Total Tokens: {stats.totalTokens}</p>
      <p>Used Tokens: {stats.usedTokens}</p>
      <p>Free Tokens: {stats.freeTokens}</p>
    </div>
  );
};

export default TokenMonitor;
