import React from "react";

interface Session {
  id: string;
  flagged: boolean;
  reason?: string;
}

interface Props {
  sessions: Session[];
  onFlagToggle: (id: string) => void;
}

const SessionFlagger: React.FC<Props> = ({ sessions, onFlagToggle }) => {
  return (
    <div>
      <h4>Session Flagger</h4>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>
            Session {session.id} - Status: {session.flagged ? "Flagged" : "Clear"}{" "}
            <button onClick={() => onFlagToggle(session.id)}>
              {session.flagged ? "Unflag" : "Flag"}
            </button>
            {session.flagged && session.reason && <p>Reason: {session.reason}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionFlagger;
