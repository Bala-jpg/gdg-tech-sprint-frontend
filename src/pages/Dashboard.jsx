import React from 'react';
function Dashboard() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Root Cause Analysis</h1>
        <p className="page-subtitle">Overview of your cloud logs and system metrics</p>
      </div>
      <div className="page-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#0c4a6e' }}>Total Logs</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#0369a1' }}>12,458</p>
          </div>
          <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#78350f' }}>Warnings</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#b45309' }}>234</p>
          </div>
          <div style={{ padding: '20px', background: '#fee2e2', borderRadius: '8px', border: '1px solid #fecaca' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#7f1d1d' }}>Errors</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#dc2626' }}>45</p>
          </div>
          <div style={{ padding: '20px', background: '#dcfce7', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#14532d' }}>Success Rate</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#16a34a' }}>98.7%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;