// data-table.js
import { LitElement, html } from 'lit';
import { dataTableStyles } from '/src/styles/data-table-styles.js';
import './avatar-icons.js';

// Render functions (same as before)
function renderUser(value, row) { /* ... */ }
function renderReport(value, row) { /* ... */ }
function renderStatus(value, row) { /* ... */ }
function renderPriority(value, row) { /* ... */ }
function formatDate(timestamp) { /* ... */ }
function renderDate(value, row) { /* ... */ }
function renderActions(value, row, handleAction, component) { /* ... */ }

const REPORTS_TABLE_CONF = [
  { property: 'user', header: 'Reporter', html: renderUser },
  { property: 'report', header: 'Report', html: renderReport },
  { property: 'status', header: 'Status', html: renderStatus },
  { property: 'priority', header: 'Priority', html: renderPriority },
  { property: 'date', header: 'Date', html: renderDate },
  { property: 'actions', header: '', html: renderActions },
];

export class DataTable extends LitElement {
  static properties = {
    data: { type: Array },
    conf: { type: Array },
    loading: { type: Boolean },
    openMenuId: { type: String },
    mode: { type: Number } // 1,2,3
  };
  static styles = dataTableStyles;

  constructor() {
    super();
    this.openMenuId = null;
    this.mode = 1;
  }

  updated(changedProps) {
    if (changedProps.has('mode')) {
      this.classList.remove('mode-1', 'mode-2', 'mode-3');
      this.classList.add(`mode-${this.mode}`);
    }
  }

  toggleMenu(itemId, event) {
    event.stopPropagation();
    this.openMenuId = this.openMenuId === itemId ? null : itemId;
  }
  closeAllMenus() { this.openMenuId = null; }

  handleAction(action, item) {
    this.closeAllMenus();
    this.dispatchEvent(new CustomEvent('table-action', {
      detail: { action, item },
      bubbles: true,
      composed: true
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', () => this.closeAllMenus());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', () => this.closeAllMenus());
  }

  render() {
    if (this.loading) return html`<div class="table-container"><div class="loading">Loading...</div></div>`;
    if (!this.data?.length) return html`<div class="table-container"><div class="no-data">No data available</div></div>`;

    return html`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              ${this.conf.map(col => html`<th>${col.header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.data.map(row => html`
              <tr>
                ${this.conf.map(col => html`
                  <td>${col.html ? col.html(row[col.property], row, (action) => this.handleAction(action, row), this) : row[col.property]}</td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>

        <div class="pagination">
          <span>0 of ${this.data?.length || 0} row(s) selected.</span>
          <div class="pagination-controls">
            <button class="pagination-btn">Previous</button>
            <button class="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('data-table', DataTable);
export { REPORTS_TABLE_CONF };
