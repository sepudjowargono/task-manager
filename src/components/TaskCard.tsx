import { Link } from "react-router-dom";
import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Due:</strong> {task.dueDate}
      </p>

      <Link to={`/tasks/${task.id}`} className="link-btn">
        View Details
      </Link>
    </div>
  );
};

export default TaskCard;
