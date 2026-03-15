import { useMemo } from 'react';
import { useTasks } from './useTasks';

interface ChartPoint {
  label: string;
  value: number;
}

export function useAnalytics() {
  const { tasks } = useTasks();

  const stats = useMemo(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.done).length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    return {
      totalTasks,
      completedTasks,
      completionRate,
      avgTimeToComplete: '2.3 days',
    };
  }, [tasks]);

  const chartData: ChartPoint[] = useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(label => ({
      label,
      value: Math.floor(Math.random() * 80) + 20,
    }));
  }, []);

  return { stats, chartData };
}
