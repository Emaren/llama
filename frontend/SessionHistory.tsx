import React from "react";

interface Props {
  messages: string[];
}

const SessionHistory: React.FC<Props> = ({ messages }) => {
  return (
    <div>
      <h3>Session History</h3>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default SessionHistory;
