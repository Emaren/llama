import React from "react";

interface Session {
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  summary: string;
  flagged: boolean;
}

interface Props {
  session: Session;
}

const SessionViewer: React.FC<Props> = ({ session }) => {
  return (
    <div>
      <h4>Session Viewer</h4>
      <p><strong>Session ID:</strong> {session.id}</p>
      <p><strong>User ID:</strong> {session.userId}</p>
      <p><strong>Start Time:</strong> {new Date(session.startTime).toLocaleString()}</p>
      <p><strong>End Time:</strong> {new Date(session.endTime).toLocaleString()}</p>
      <p><strong>Summary:</strong> {session.summary}</p>
      <p><strong>Flagged:</strong> {session.flagged ? "Yes" : "No"}</p>
    </div>
  );
};

export default SessionViewer;
