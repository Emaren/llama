import React from "react";

interface MemoryEvent {
  id: string;
  timestamp: string;
  description: string;
}

interface Props {
  events: MemoryEvent[];
}

const MemoryTimeline: React.FC<Props> = ({ events }) => {
  return (
    <div>
      <h4>Memory Timeline</h4>
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

export default MemoryTimeline;
