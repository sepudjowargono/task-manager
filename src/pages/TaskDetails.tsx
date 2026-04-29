import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, deleteTask } = useTasks();

  const task = id ? getTaskById(id) : undefined;

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/");
  };

  return (
    <div className="page">
      <h1>{task.title}</h1>

      <div className="card">
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Status:</strong> {task.status}
        </p>
        <p>
          <strong>Priority:</strong> {task.priority}
        </p>
        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>

        <Link to={`/edit/${task.id}`} className="link-btn">
          Edit Task
        </Link>
        <button onClick={handleDelete} className="delete-btn">
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
