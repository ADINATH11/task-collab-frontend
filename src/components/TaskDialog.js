// src/components/TaskDialog.js
import { useState } from 'react';
import './TaskDialog.css';

const TaskDialog = ({ task, onClose, onSave }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedTask);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h3>Edit Task</h3>
        <input
          name="name"
          value={updatedTask.name}
          onChange={handleChange}
          placeholder="Task Name"
        />
        <textarea
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <input
          name="assignee"
          value={updatedTask.assignee}
          onChange={handleChange}
          placeholder="Assignee"
        />
        <select name="status" value={updatedTask.status} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <div className="dialog-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDialog;
