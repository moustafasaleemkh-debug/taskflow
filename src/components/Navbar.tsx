import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Dashboard' },
    { path: '/team', label: 'Team' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">TaskFlow</div>
      <ul>
        {links.map(link => (
          <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
