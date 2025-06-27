import React from "react";

interface Props {
  cpuUsage: number;
  memoryUsage: number;
  errors: string[];
}

const DiagnosticsPanel: React.FC<Props> = ({ cpuUsage, memoryUsage, errors }) => {
  return (
    <div>
      <h4>Diagnostics Panel</h4>
      <p>CPU Usage: {cpuUsage.toFixed(1)}%</p>
      <p>Memory Usage: {memoryUsage.toFixed(1)}%</p>
      <h5>Errors</h5>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : (
        <p>No errors detected.</p>
      )}
    </div>
  );
};

export default DiagnosticsPanel;
