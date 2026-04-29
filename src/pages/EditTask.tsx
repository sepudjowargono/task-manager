import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import type { TaskPriority, TaskStatus } from "../types/Task";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();

  const task = id ? getTaskById(id) : undefined;

  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.description || "",
  );
  const [status, setStatus] = useState<TaskStatus>(task?.status || "Todo");
  const [priority, setPriority] = useState<TaskPriority>(
    task?.priority || "Medium",
  );
  const [dueDate, setDueDate] = useState<string>(task?.dueDate || "");
  const [error, setError] = useState<string>("");

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      setError("Please fill out all required fields.");
      return;
    }

    updateTask({
      id: task.id,
      title,
      description,
      status,
      priority,
      dueDate,
    });

    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className="page">
      <h1>Edit Task</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="form">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="Todo">Todo</option>
          <option value="In-Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label>Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
