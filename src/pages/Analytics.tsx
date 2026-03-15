import { useAnalytics } from '../hooks/useAnalytics';

export function Analytics() {
  const { stats, chartData } = useAnalytics();

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{stats.totalTasks}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{stats.completedTasks}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{stats.completionRate}%</span>
          <span className="stat-label">Completion Rate</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{stats.avgTimeToComplete}</span>
          <span className="stat-label">Avg. Time to Complete</span>
        </div>
      </div>
      <div className="chart-section">
        <h2>Tasks Over Time</h2>
        <div className="chart-placeholder">
          {chartData.map((point, i) => (
            <div key={i} className="bar" style={{ height: `${point.value}%` }}>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
