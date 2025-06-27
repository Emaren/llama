import React from "react";

interface MessageNode {
  id: string;
  content: string;
  children: MessageNode[];
}

interface Props {
  root: MessageNode;
}

const MessageStructureGraph: React.FC<Props> = ({ root }) => {
  const renderNode = (node: MessageNode) => (
    <li key={node.id}>
      {node.content}
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child) => renderNode(child))}
        </ul>
      )}
    </li>
  );

  return (
    <div>
      <h4>Message Structure Graph</h4>
      <ul>{renderNode(root)}</ul>
    </div>
  );
};

export default MessageStructureGraph;
