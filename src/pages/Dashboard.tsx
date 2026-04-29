import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTasks(); // access tasks from context

  return (
    <div className="page">
      <h1>Task Dashboard</h1>

      {tasks.length === 0 ? (
        <p>No tasks available. Create your first task.</p>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
