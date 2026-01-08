import React from 'react';

function Filters() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Filters</h1>
        <p className="page-subtitle">Configure log filters and search criteria</p>
      </div>
      <div className="page-content">
        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Log Level
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
              <option>All Levels</option>
              <option>INFO</option>
              <option>WARNING</option>
              <option>ERROR</option>
              <option>DEBUG</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Date Range
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <input
                type="date"
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px'
                }}
              />
              <input
                type="date"
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px'
                }}
              />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Keywords
            </label>
            <input
              type="text"
              placeholder="Enter keywords to filter..."
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '15px'
              }}
            />
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
              cursor: 'pointer'
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;