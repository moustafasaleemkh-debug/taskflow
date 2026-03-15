import { useState } from 'react';

export interface Task {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks(prev => [...prev, {
      id: crypto.randomUUID(),
      title,
      done: false,
      createdAt: new Date(),
    }]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return { tasks, addTask, toggleTask };
}
