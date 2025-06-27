import React from "react";

interface QueryPattern {
  id: string;
  pattern: string;
  frequency: number;
}

interface Props {
  patterns: QueryPattern[];
}

const QueryPatternTracer: React.FC<Props> = ({ patterns }) => {
  return (
    <div>
      <h4>Query Pattern Tracer</h4>
      <ul>
        {patterns.map((p) => (
          <li key={p.id}>
            {p.pattern} - {p.frequency} times
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryPatternTracer;
