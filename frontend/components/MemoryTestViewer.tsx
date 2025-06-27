import React from "react";

interface TestResult {
  id: string;
  memoryId: string;
  passed: boolean;
  notes: string;
}

interface Props {
  testResults: TestResult[];
}

const MemoryTestViewer: React.FC<Props> = ({ testResults }) => {
  return (
    <div>
      <h4>Memory Test Viewer</h4>
      <ul>
        {testResults.map((result) => (
          <li key={result.id}>
            Memory ID: {result.memoryId} - {result.passed ? "Passed" : "Failed"} - Notes: {result.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryTestViewer;
