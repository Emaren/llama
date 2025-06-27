import React, { useState } from "react";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
}

const ProjectPlanner: React.FC<Props> = ({ tasks, onUpdateTask }) => {
  const [localTasks, setLocalTasks] = useState(tasks);

  const toggleTask = (id: string) => {
    const updatedTasks = localTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setLocalTasks(updatedTasks);
    const updatedTask = updatedTasks.find((t) => t.id === id);
    if (updatedTask) onUpdateTask(updatedTask);
  };

  return (
    <div>
      <h4>Project Planner</h4>
      <ul>
        {localTasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.description}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPlanner;
