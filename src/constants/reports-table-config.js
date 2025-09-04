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
        <div class="report-location">
          📍 ${row.location}
        </div>
      </div>
    </div>
  `;
}

function renderStatus(value, row) {
  return html`<span class="status-badge status-${value}">${value}</span>`;
}

function renderPriority(value, row) {
  return html`<span class="priority-badge priority-${value}">${value}</span>`;
}

function formatDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function renderDate(value, row) {
  return html`<div class="date-cell">${formatDate(row.reportedAt)}</div>`;
}

function renderActions(value, row, handleAction, component) {
  const isPending = row.status === 'pending';
  const isMenuOpen = component.openMenuId === row.id;

  return html`
    <div class="action-menu">
      <button 
        class="menu-trigger"
        @click=${(e) => component.toggleMenu(row.id, e)}>
        ⋮
      </button>
      <div class="menu-dropdown ${isMenuOpen ? 'open' : ''}">
        <button 
          class="menu-item"
          @click=${() => handleAction('view')}>
          👁️ View
        </button>
        ${isPending ? html`
          <button 
            class="menu-item approve"
            @click=${() => handleAction('approve')}>
            ✅ Approve
          </button>
          <button 
            class="menu-item reject"
            @click=${() => handleAction('reject')}>
            ❌ Reject
          </button>
        ` : html`
          <button 
            class="menu-item"
            @click=${() => handleAction('reopen')}>
            🔄 Reopen
          </button>
        `}
      </div>
    </div>
  `;
}

export const REPORTS_TABLE_CONF = [
  { property: 'user', header: 'Reporter', html: renderUser },
  { property: 'report', header: 'Report', html: renderReport },
  { property: 'status', header: 'Status', html: renderStatus },
  { property: 'priority', header: 'Priority', html: renderPriority },
  { property: 'date', header: 'Date', html: renderDate },
  { property: 'actions', header: '', html: renderActions },
];