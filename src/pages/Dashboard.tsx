import { TaskList } from '../components/TaskList';
import { useAuth } from '../hooks/useAuth';

export function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header>
        <h1>My Tasks</h1>
        <span>{user?.email}</span>
        <button onClick={logout}>Logout</button>
      </header>
      <TaskList />
    </div>
  );
}
