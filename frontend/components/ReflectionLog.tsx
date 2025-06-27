import React from "react";

interface Reflection {
  id: string;
  timestamp: string;
  content: string;
}

interface Props {
  reflections: Reflection[];
}

const ReflectionLog: React.FC<Props> = ({ reflections }) => {
  return (
    <div>
      <h4>Reflection Log</h4>
      <ul>
        {reflections.map((ref) => (
          <li key={ref.id}>
            <em>{new Date(ref.timestamp).toLocaleString()}</em>: {ref.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReflectionLog;
