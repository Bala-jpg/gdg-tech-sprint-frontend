import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const menuItems = [
    { path: '/dashboard', label: 'RCA Dashboard', icon: '📊' },
    { path: '/log-viewer', label: 'Log Viewer', icon: '📋' },
    { path: '/filters', label: 'Filters', icon: '🔍' },
    { path: '/alerts', label: 'Alerts', icon: '🔔' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>☁️ Cloud Log Analyzer</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;