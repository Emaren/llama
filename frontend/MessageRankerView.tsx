import React from "react";

interface Message {
  id: string;
  content: string;
  score: number;
}

interface Props {
  messages: Message[];
}

const MessageRankerView: React.FC<Props> = ({ messages }) => {
  const sortedMessages = [...messages].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h3>Message Ranker</h3>
      <ul>
        {sortedMessages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.score.toFixed(2)}</strong>: {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageRankerView;
