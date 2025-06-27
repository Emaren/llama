import React from "react";

interface SessionEntry {
  id: string;
  timestamp: string;
  activitySummary: string;
}

interface Props {
  sessions: SessionEntry[];
}

const SessionHistoryViewer: React.FC<Props> = ({ sessions }) => {
  return (
    <div>
      <h4>Session History Viewer</h4>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>
            <strong>{new Date(session.timestamp).toLocaleString()}</strong>: {session.activitySummary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionHistoryViewer;
