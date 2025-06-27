import React from "react";

interface Feedback {
  id: string;
  message: string;
  sentiment: string;
}

interface Props {
  feedbacks: Feedback[];
}

const FeedbackAggregator: React.FC<Props> = ({ feedbacks }) => {
  return (
    <div>
      <h4>Feedback Aggregator</h4>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}>
            {fb.message} ({fb.sentiment})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackAggregator;
