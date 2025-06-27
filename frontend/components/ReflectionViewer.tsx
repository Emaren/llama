import React from "react";

interface Reflection {
  id: string;
  timestamp: string;
  content: string;
  author: string;
}

interface Props {
  reflection: Reflection;
}

const ReflectionViewer: React.FC<Props> = ({ reflection }) => {
  return (
    <div>
      <h4>Reflection Viewer</h4>
      <p><strong>Author:</strong> {reflection.author}</p>
      <p><em>{new Date(reflection.timestamp).toLocaleString()}</em></p>
      <p>{reflection.content}</p>
    </div>
  );
};

export default ReflectionViewer;
