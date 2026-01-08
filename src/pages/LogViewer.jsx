import React, { useState } from 'react';
import '../styles/LogViewer.css';

function LogViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLog, setSelectedLog] = useState(null);

  const sampleLogs = [
    { 
      id: 1, 
      timestamp: '2026-01-08 10:30:45', 
      level: 'INFO', 
      message: 'Application started successfully',
      service: 'API Gateway',
      details: 'Server initialized on port 3000. All health checks passed.'
    },
    { 
      id: 2, 
      timestamp: '2026-01-08 10:31:12', 
      level: 'WARNING', 
      message: 'High memory usage detected',
      service: 'Database',
      details: 'Memory usage at 87%. Consider scaling resources.'
    },
    { 
      id: 3, 
      timestamp: '2026-01-08 10:32:03', 
      level: 'ERROR', 
      message: 'Failed to connect to database',
      service: 'Backend',
      details: 'Connection timeout after 30 seconds. Retry attempt 1 of 3.'
    },
    { 
      id: 4, 
      timestamp: '2026-01-08 10:32:45', 
      level: 'INFO', 
      message: 'Connection retry successful',
      service: 'Backend',
      details: 'Database connection established successfully.'
    },
    { 
      id: 5, 
      timestamp: '2026-01-08 10:33:21', 
      level: 'DEBUG', 
      message: 'User authentication request received',
      service: 'Auth Service',
      details: 'Processing OAuth token validation for user session.'
    },
    { 
      id: 6, 
      timestamp: '2026-01-08 10:34:15', 
      level: 'ERROR', 
      message: 'API rate limit exceeded',
      service: 'API Gateway',
      details: 'Client IP 192.168.1.100 exceeded 1000 requests per minute.'
    },
    { 
      id: 7, 
      timestamp: '2026-01-08 10:35:02', 
      level: 'INFO', 
      message: 'Cache cleared successfully',
      service: 'Cache Service',
      details: 'Redis cache flushed. Memory freed: 256MB.'
    },
    { 
      id: 8, 
      timestamp: '2026-01-08 10:36:30', 
      level: 'WARNING', 
      message: 'Slow query detected',
      service: 'Database',
      details: 'Query execution time: 5.2s. Consider adding index.'
    }
  ];

  const getLevelColor = (level) => {
    const colors = {
      INFO: { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af' },
      WARNING: { bg: '#fef3c7', border: '#f59e0b', text: '#b45309' },
      ERROR: { bg: '#fee2e2', border: '#ef4444', text: '#b91c1c' },
      DEBUG: { bg: '#f3e8ff', border: '#a855f7', text: '#7e22ce' }
    };
    return colors[level] || { bg: '#f1f5f9', border: '#64748b', text: '#475569' };
  };

  const getLevelIcon = (level) => {
    const icons = {
      INFO: 'ℹ️',
      WARNING: '⚠️',
      ERROR: '❌',
      DEBUG: '🔧'
    };
    return icons[level] || '📋';
  };

  const filteredLogs = sampleLogs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const logStats = {
    total: sampleLogs.length,
    info: sampleLogs.filter(l => l.level === 'INFO').length,
    warning: sampleLogs.filter(l => l.level === 'WARNING').length,
    error: sampleLogs.filter(l => l.level === 'ERROR').length,
    debug: sampleLogs.filter(l => l.level === 'DEBUG').length
  };

  return (
    <div className="log-viewer-container">
      {/* Header Section */}
      <div className="log-viewer-header">
        <div>
          <h1 className="log-viewer-title">Log Viewer</h1>
          <p className="log-viewer-subtitle">Real-time system logs and monitoring</p>
        </div>
        <button className="refresh-btn">
          <span className="refresh-icon">🔄</span>
          Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-total">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Total Logs</div>
            <div className="stat-value">{logStats.total}</div>
          </div>
        </div>
        <div className="stat-card stat-info">
          <div className="stat-icon">ℹ️</div>
          <div className="stat-content">
            <div className="stat-label">Info</div>
            <div className="stat-value">{logStats.info}</div>
          </div>
        </div>
        <div className="stat-card stat-warning">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <div className="stat-label">Warnings</div>
            <div className="stat-value">{logStats.warning}</div>
          </div>
        </div>
        <div className="stat-card stat-error">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <div className="stat-label">Errors</div>
            <div className="stat-value">{logStats.error}</div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search logs by message or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>

        <div className="level-filters">
          {['all', 'INFO', 'WARNING', 'ERROR', 'DEBUG'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`level-filter-btn ${selectedLevel === level ? 'active' : ''}`}
              data-level={level.toLowerCase()}
            >
              {level === 'all' ? 'All' : level}
            </button>
          ))}
        </div>
      </div>

      {/* Logs Table */}
      <div className="logs-content">
        <div className="logs-table-container">
          <div className="logs-table-header">
            <div className="table-col col-level">Level</div>
            <div className="table-col col-timestamp">Timestamp</div>
            <div className="table-col col-service">Service</div>
            <div className="table-col col-message">Message</div>
            <div className="table-col col-action">Action</div>
          </div>

          <div className="logs-table-body">
            {filteredLogs.length === 0 ? (
              <div className="no-logs">
                <span className="no-logs-icon">🔍</span>
                <p>No logs found matching your criteria</p>
              </div>
            ) : (
              filteredLogs.map((log) => {
                const colors = getLevelColor(log.level);
                return (
                  <div
                    key={log.id}
                    className="log-row"
                    onClick={() => setSelectedLog(log)}
                  >
                    <div className="table-col col-level">
                      <span 
                        className="level-badge"
                        style={{ 
                          background: colors.bg, 
                          color: colors.text,
                          borderLeft: `3px solid ${colors.border}`
                        }}
                      >
                        <span className="level-icon">{getLevelIcon(log.level)}</span>
                        {log.level}
                      </span>
                    </div>
                    <div className="table-col col-timestamp">
                      <span className="timestamp-text">{log.timestamp}</span>
                    </div>
                    <div className="table-col col-service">
                      <span className="service-badge">{log.service}</span>
                    </div>
                    <div className="table-col col-message">
                      <span className="message-text">{log.message}</span>
                    </div>
                    <div className="table-col col-action">
                      <button className="view-details-btn">
                        View Details →
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Log Details Modal */}
        {selectedLog && (
          <div className="modal-overlay" onClick={() => setSelectedLog(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Log Details</h2>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedLog(null)}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="detail-row">
                  <span className="detail-label">Level:</span>
                  <span 
                    className="level-badge"
                    style={{ 
                      background: getLevelColor(selectedLog.level).bg,
                      color: getLevelColor(selectedLog.level).text,
                      borderLeft: `3px solid ${getLevelColor(selectedLog.level).border}`
                    }}
                  >
                    {getLevelIcon(selectedLog.level)} {selectedLog.level}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Timestamp:</span>
                  <span className="detail-value">{selectedLog.timestamp}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Service:</span>
                  <span className="service-badge">{selectedLog.service}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Message:</span>
                  <span className="detail-value">{selectedLog.message}</span>
                </div>
                <div className="detail-row detail-full">
                  <span className="detail-label">Details:</span>
                  <div className="detail-box">{selectedLog.details}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setSelectedLog(null)}>
                  Close
                </button>
                <button className="btn-primary">
                  Export Log
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Pagination */}
      <div className="logs-footer">
        <div className="showing-text">
          Showing {filteredLogs.length} of {sampleLogs.length} logs
        </div>
        <div className="pagination">
          <button className="pagination-btn">← Previous</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">Next →</button>
        </div>
      </div>
    </div>
  );
}

export default LogViewer;