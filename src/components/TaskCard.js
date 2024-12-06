// src/components/TaskCard.js
// const TaskCard = ({ task, onEdit, onDelete }) => (
//     <div>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <button onClick={() => onEdit(task)}>Edit</button>
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </div>
//   );
  
//   export default TaskCard;
  
// src/components/TaskCard.js
import './TaskCard.css';

const TaskCard = ({ task, onClick }) => (
  <div className="task-card" onClick={onClick}>
    <h4>{task.name}</h4>
    <p>{task.assignee}</p>
  </div>
);

export default TaskCard;
