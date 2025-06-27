import React from "react";

interface Props {
  name: string;
  status: string;
}

const PersonaBadge: React.FC<Props> = ({ name, status }) => {
  return (
    <div style={{ border: "1px solid #333", padding: "5px", borderRadius: "6px", display: "inline-block" }}>
      <strong>{name}</strong>
      <p>Status: {status}</p>
    </div>
  );
};

export default PersonaBadge;
