import React from "react";

interface Insight {
  category: string;
  value: number;
}

interface Props {
  insights: Insight[];
}

const PersonaInsightRadar: React.FC<Props> = ({ insights }) => {
  // Placeholder rendering - replace with actual radar chart implementation
  return (
    <div>
      <h4>Persona Insight Radar</h4>
      <ul>
        {insights.map((insight, idx) => (
          <li key={idx}>
            {insight.category}: {insight.value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonaInsightRadar;
