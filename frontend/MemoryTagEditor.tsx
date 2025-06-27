import React, { useState } from "react";

interface MemoryTag {
  id: string;
  tag: string;
}

interface Props {
  tags: MemoryTag[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (id: string) => void;
}

const MemoryTagEditor: React.FC<Props> = ({ tags, onAddTag, onRemoveTag }) => {
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim()) {
      onAddTag(newTag.trim());
      setNewTag("");
    }
  };

  return (
    <div>
      <h3>Memory Tag Editor</h3>
      <input
        type="text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        placeholder="New tag"
      />
      <button onClick={addTag}>Add Tag</button>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.tag} <button onClick={() => onRemoveTag(tag.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryTagEditor;
