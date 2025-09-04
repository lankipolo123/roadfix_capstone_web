import { html } from 'lit';

function getUserInitials(name) {
  return name?.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U';
}

function renderUser(value, row) {
  return html`
    <div class="user-cell">
      <div class="user-avatar">
        ${getUserInitials(row.fullName)}
      </div>
      <div class="user-info">
        <div class="user-name">${row.fullName}</div>
        <div class="user-email">${row.email}</div>
      </div>
    </div>
  `;
}

function renderReport(value, row) {
  const imageUrl = row.imageUrl?.[0] || 'https://via.placeholder.com/40x30/e5e7eb/9ca3af?text=IMG';
  return html`
    <div class="report-cell">
      <img src="${imageUrl}" alt="Report" class="report-image" />
      <div class="report-details">
        <div class="report-type">${row.reportType}</div>
        <div class="report-description">${row.description}</div>
      </div>
    </div>
  `;
}

function renderStatus(value, row) {
  return html`<span class="status-badge status-${value}">${value}</span>`;
}

function renderDate(value, row) {
  const date = row.reportedAt ? new Date(row.reportedAt) : null;
  return html`<div class="date-cell">${date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''}</div>`;
}

// Recent Reports Config — simplified version
export const RECENT_REPORTS_TABLE_CONF = [
  { property: 'user', header: 'Reporter', html: renderUser },
  { property: 'report', header: 'Report', html: renderReport },
  { property: 'status', header: 'Status', html: renderStatus },
  { property: 'date', header: 'Date', html: renderDate },
];
