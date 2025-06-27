import React from "react";

interface FeedbackPoint {
  timestamp: string;
  score: number; // e.g., sentiment score
}

interface Props {
  feedbackPoints: FeedbackPoint[];
}

const SessionFeedbackGraph: React.FC<Props> = ({ feedbackPoints }) => {
  return (
    <div>
      <h4>Session Feedback Graph</h4>
      <ul>
        {feedbackPoints.map((point, idx) => (
          <li key={idx}>
            {new Date(point.timestamp).toLocaleString()}: {point.score.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionFeedbackGraph;
