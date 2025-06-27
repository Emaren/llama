import React from "react";

interface Props {
  uptimeHours: number;
  errorCount: number;
  lastRestart: string;
}

const DiagnosticStats: React.FC<Props> = ({ uptimeHours, errorCount, lastRestart }) => {
  return (
    <div>
      <h4>Diagnostic Stats</h4>
      <p>Uptime: {uptimeHours.toFixed(1)} hours</p>
      <p>Error Count: {errorCount}</p>
      <p>Last Restart: {new Date(lastRestart).toLocaleString()}</p>
    </div>
  );
};

export default DiagnosticStats;
