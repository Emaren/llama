import React from "react";

interface TokenFlow {
  source: string;
  target: string;
  amount: number;
}

interface Props {
  flows: TokenFlow[];
}

const TokenFlowChart: React.FC<Props> = ({ flows }) => {
  return (
    <div>
      <h4>Token Flow Chart</h4>
      <ul>
        {flows.map((flow, idx) => (
          <li key={idx}>
            {flow.amount} tokens from {flow.source} to {flow.target}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenFlowChart;
