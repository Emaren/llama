import React, { useState } from "react";

interface Task {
  id: string;
  name: string;
  scheduledTime: string;
}

interface Props {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
}

const ScheduleEditor: React.FC<Props> = ({ tasks, onUpdateTask }) => {
  const [localTasks, setLocalTasks] = useState(tasks);

  const handleChange = (id: string, newTime: string) => {
    const updatedTasks = localTasks.map((task) =>
      task.id === id ? { ...task, scheduledTime: newTime } : task
    );
    setLocalTasks(updatedTasks);
    const updatedTask = updatedTasks.find((t) => t.id === id);
    if (updatedTask) onUpdateTask(updatedTask);
  };

  return (
    <div>
      <h4>Schedule Editor</h4>
      <ul>
        {localTasks.map((task) => (
          <li key={task.id}>
            {task.name}:
            <input
              type="datetime-local"
              value={task.scheduledTime}
              onChange={(e) => handleChange(task.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleEditor;
