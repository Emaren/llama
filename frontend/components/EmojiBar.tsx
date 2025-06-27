import React from "react";

interface Props {
  emojis: string[];
}

const EmojiBar: React.FC<Props> = ({ emojis }) => {
  return (
    <div>
      {emojis.map((emoji, idx) => (
        <span key={idx} style={{ fontSize: "1.5rem", margin: "0 5px" }}>
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiBar;
