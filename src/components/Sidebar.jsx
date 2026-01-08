function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Cloud Log Analyser</h2>

      <ul>
        <li>Dashboard</li>
        <li>Upload Logs</li>
        <li className="active">Log Viewer</li>
        <li>Filters</li>
        <li>Alerts</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
