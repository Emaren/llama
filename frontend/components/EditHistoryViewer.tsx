import React, { useEffect, useState } from 'react';

interface EditRecord {
  timestamp: string;
  description: string;
}

export default function EditHistoryViewer() {
  const [history, setHistory] = useState<EditRecord[]>([]);

  useEffect(() => {
    // TODO: fetch edit history from backend API
    setHistory([
      { timestamp: '2025-06-27T12:00:00Z', description: 'Initial commit of feature X' },
      { timestamp: '2025-06-27T12:15:00Z', description: 'Refactored memory module' },
    ]);
  }, []);

  return (
    <div style={{ maxHeight: 300, overflowY: 'auto', fontFamily: 'monospace' }}>
      <h3>Edit History</h3>
      <ul>
        {history.map((edit, idx) => (
          <li key={idx}>
            <strong>{edit.timestamp}</strong>: {edit.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
