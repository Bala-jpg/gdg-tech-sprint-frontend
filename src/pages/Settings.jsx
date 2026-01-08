import React from 'react';

function Settings() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your application preferences</p>
      </div>
      <div className="page-content">
        <div style={{ display: 'grid', gap: '32px' }}>
          <div>
            <h3 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>General Settings</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Enable real-time log monitoring</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Send email notifications for critical alerts</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Auto-archive logs older than 30 days</span>
              </label>
            </div>
          </div>
          <div>
            <h3 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>Display Preferences</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Theme
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '15px'
                  }}
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Auto</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Logs per page
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '15px'
                  }}
                >
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
          </div>
          <button
            style={{
              padding: '12px 24px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              justifySelf: 'start'
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;