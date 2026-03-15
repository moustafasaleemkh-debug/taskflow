import { useState } from 'react';
import { useTasks, Task } from '../hooks/useTasks';

export function TaskList() {
  const { tasks, addTask, toggleTask } = useTasks();
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (newTitle.trim()) {
      addTask(newTitle.trim());
      setNewTitle('');
    }
  };

  return (
    <div className="task-list">
      <div className="add-task">
        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Add a task..." />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.done ? 'done' : ''}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
