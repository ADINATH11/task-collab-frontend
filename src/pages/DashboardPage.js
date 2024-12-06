import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskDialog from '../components/TaskDialog';
import './DashboardPage.css';

const DashboardPage = () => {
  // Simulated data for boards, users, and tasks
  const [boards, setBoards] = useState(['Development', 'Marketing', 'Sales']); // Board names
  const [users, setUsers] = useState(['John', 'Jane', 'Mike']); // User names
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1', assignee: 'John', status: 'todo', board: 'Development' },
    { id: 2, name: 'Task 2', description: 'Description 2', assignee: 'Jane', status: 'in-progress', board: 'Marketing' },
    { id: 3, name: 'Task 3', description: 'Description 3', assignee: 'Mike', status: 'done', board: 'Development' },
  ]);

  // State for filtering and selected board
  const [selectedBoard, setSelectedBoard] = useState('Development'); // Default to first board
  const [selectedUser, setSelectedUser] = useState(''); // Default to all users
  const [filteredTasks, setFilteredTasks] = useState(tasks); // Tasks to display
  const [selectedTask, setSelectedTask] = useState(null); // For dialog

  // Filter tasks when board or user changes
  useEffect(() => {
    let filtered = tasks.filter((task) => task.board === selectedBoard);
    if (selectedUser) {
      filtered = filtered.filter((task) => task.assignee === selectedUser);
    }
    setFilteredTasks(filtered);
  }, [selectedBoard, selectedUser, tasks]);

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSelectedTask(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-controls">
        <div className="control-group">
          <label htmlFor="board-select">Board:</label>
          <select
            id="board-select"
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
          >
            {boards.map((board) => (
              <option key={board} value={board}>
                {board}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="user-filter">Filter by:</label>
          <select
            id="user-filter"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">All Users</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="task-columns">
        {['todo', 'in-progress', 'done'].map((status) => (
          <div key={status} className="task-column">
            <h3>{status.replace('-', ' ').toUpperCase()}</h3>
            <div className="task-column-content">
              {filteredTasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskCard key={task.id} task={task} onClick={() => setSelectedTask(task)} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {selectedTask && (
        <TaskDialog task={selectedTask} onClose={() => setSelectedTask(null)} onSave={handleTaskUpdate} />
      )}
    </div>
  );
};

export default DashboardPage;
