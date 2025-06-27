import React from "react";

interface FeedbackEntry {
  id: string;
  timestamp: string;
  message: string;
  sentiment: string;
}

interface Props {
  feedbackEntries: FeedbackEntry[];
}

const FeedbackLog: React.FC<Props> = ({ feedbackEntries }) => {
  return (
    <div>
      <h4>Feedback Log</h4>
      <ul>
        {feedbackEntries.map((entry) => (
          <li key={entry.id}>
            <em>{new Date(entry.timestamp).toLocaleString()}</em>: {entry.message} ({entry.sentiment})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackLog;
