import React from "react";

interface ThreadStatus {
  id: string;
  name: string;
  status: "running" | "idle" | "stopped" | "error";
  cpuUsage: number; // percentage
}

interface Props {
  threads: ThreadStatus[];
}

const ThreadHealthViewer: React.FC<Props> = ({ threads }) => {
  const getColor = (status: string) => {
    switch (status) {
      case "running":
        return "green";
      case "idle":
        return "gray";
      case "stopped":
        return "orange";
      case "error":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div>
      <h4>Thread Health Viewer</h4>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} style={{ color: getColor(thread.status) }}>
            {thread.name} — Status: {thread.status}, CPU: {thread.cpuUsage.toFixed(1)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadHealthViewer;
