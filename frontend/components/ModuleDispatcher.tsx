import React from "react";

interface Task {
  id: string;
  description: string;
  status: "pending" | "running" | "completed" | "failed";
}

interface Props {
  tasks: Task[];
}

const ModuleDispatcher: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      <h4>Module Dispatcher</h4>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} — <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleDispatcher;
