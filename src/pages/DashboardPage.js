// src/pages/DashboardPage.js
import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import TaskDialog from '../components/TaskDialog';
import './DashboardPage.css';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1', assignee: 'John', status: 'todo' },
    { id: 2, name: 'Task 2', description: 'Description 2', assignee: 'Jane', status: 'in-progress' },
    { id: 3, name: 'Task 3', description: 'Description 3', assignee: 'Mike', status: 'done' },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSelectedTask(null);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="dashboard">
      {['todo', 'in-progress', 'done'].map((status) => (
        <div key={status} className="task-column">
          <h3>{status.replace('-', ' ').toUpperCase()}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
        </div>
      ))}
      {selectedTask && (
        <TaskDialog task={selectedTask} onClose={() => setSelectedTask(null)} onSave={handleTaskUpdate} />
      )}
    </div>
  );
};

export default DashboardPage;
