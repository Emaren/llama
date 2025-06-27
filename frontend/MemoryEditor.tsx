import React, { useState } from "react";

interface Memory {
  id: string;
  content: string;
}

interface Props {
  memories: Memory[];
  onUpdate: (id: string, newContent: string) => void;
}

const MemoryEditor: React.FC<Props> = ({ memories, onUpdate }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const startEdit = (memory: Memory) => {
    setEditId(memory.id);
    setEditContent(memory.content);
  };

  const saveEdit = () => {
    if (editId) {
      onUpdate(editId, editContent);
      setEditId(null);
      setEditContent("");
    }
  };

  return (
    <div>
      <h3>Memory Editor</h3>
      <ul>
        {memories.map((memory) => (
          <li key={memory.id}>
            {editId === memory.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{memory.content}</span>
                <button onClick={() => startEdit(memory)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryEditor;
