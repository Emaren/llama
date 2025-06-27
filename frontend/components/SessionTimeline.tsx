import React from "react";

interface SessionEvent {
  id: string;
  timestamp: string;
  description: string;
}

interface Props {
  events: SessionEvent[];
}

const SessionTimeline: React.FC<Props> = ({ events }) => {
  return (
    <div>
      <h4>Session Timeline</h4>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{new Date(event.timestamp).toLocaleString()}</strong>: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionTimeline;
