const logs = [
  { time: "12:45:32", level: "ERROR", service: "AuthService", message: "Failed login attempt" },
  { time: "12:44:15", level: "INFO", service: "API Gateway", message: "Request success" },
  { time: "12:42:10", level: "WARNING", service: "Database", message: "High memory usage" }
];

function LogTable() {
  return (
    <table className="log-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Level</th>
          <th>Service</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.time}</td>
            <td className={log.level.toLowerCase()}>{log.level}</td>
            <td>{log.service}</td>
            <td>{log.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LogTable;
