import React from "react";

interface Diagnostic {
  id: string;
  message: string;
  severity: "info" | "warning" | "error";
  timestamp: string;
}

interface Props {
  diagnostics: Diagnostic[];
}

const SystemDiagnostics: React.FC<Props> = ({ diagnostics }) => {
  const getColor = (severity: string) => {
    switch (severity) {
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        return "black";
    }
  };

  return (
    <div>
      <h4>System Diagnostics</h4>
      <ul>
        {diagnostics.map((diag) => (
          <li key={diag.id} style={{ color: getColor(diag.severity) }}>
            [{new Date(diag.timestamp).toLocaleString()}] {diag.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SystemDiagnostics;
