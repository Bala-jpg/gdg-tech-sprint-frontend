import React from 'react';

function Alerts() {
  const alerts = [
    { id: 1, title: 'High Error Rate', description: 'Error rate exceeded 5% threshold', time: '5 minutes ago', severity: 'high' },
    { id: 2, title: 'Disk Space Warning', description: 'Disk usage at 85%', time: '1 hour ago', severity: 'medium' },
    { id: 3, title: 'API Response Slow', description: 'Average response time increased', time: '3 hours ago', severity: 'low' }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      high: '#fee2e2',
      medium: '#fef3c7',
      low: '#dbeafe'
    };
    return colors[severity];
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Alerts</h1>
        <p className="page-subtitle">Monitor system alerts and notifications</p>
      </div>
      <div className="page-content">
        <div style={{ display: 'grid', gap: '16px' }}>
          {alerts.map((alert) => (
            <div
              key={alert.id}
              style={{
                padding: '20px',
                background: getSeverityColor(alert.severity),
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <h3 style={{ margin: 0, color: '#0f172a' }}>{alert.title}</h3>
                <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>
                  {alert.severity}
                </span>
              </div>
              <p style={{ margin: '0 0 8px 0', color: '#475569' }}>{alert.description}</p>
              <span style={{ fontSize: '14px', color: '#64748b' }}>{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alerts;