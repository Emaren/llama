import React from "react";

interface Props {
  attentionLevel: number; // 0 to 100
}

const AttentionProfileBadge: React.FC<Props> = ({ attentionLevel }) => {
  const getColor = () => {
    if (attentionLevel > 75) return "green";
    if (attentionLevel > 40) return "orange";
    return "red";
  };

  return (
    <div
      style={{
        padding: "5px 10px",
        borderRadius: "8px",
        backgroundColor: getColor(),
        color: "#fff",
        fontWeight: "bold",
        display: "inline-block",
      }}
    >
      Attention: {attentionLevel}%
    </div>
  );
};

export default AttentionProfileBadge;
