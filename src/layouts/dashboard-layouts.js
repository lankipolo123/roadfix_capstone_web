import { LitElement, html } from 'lit';
import '/src/components/commons/sidebar.js';
import { dashboardLayoutStyles } from '/src/styles/dashboard-layout-styles.js';

export class DashboardLayout extends LitElement {
  static styles = dashboardLayoutStyles;

  static properties = {
    collapsed: { type: Boolean }
  };

  constructor() {
    super();
    const saved = localStorage.getItem('sidebarCollapsed');
    this.collapsed = saved === 'true';
  }

  render() {
    const sidebarWidth = this.collapsed ? 70 : 110;
    return html`
      <div class="layout ${this.collapsed ? 'collapsed' : 'expanded'}"
           style="--sidebar-width: ${sidebarWidth}px">

        <app-sidebar .collapsed="${this.collapsed}"></app-sidebar>

        <button class="sidebar-toggle" @click="${this._handleToggle}">
          ${this.collapsed ? '➡' : '⬅'}
        </button>

        <div class="content">
          <slot></slot> <!-- page-header + page-content -->
        </div>
      </div>
    `;
  }

  _handleToggle() {
    this.collapsed = !this.collapsed;
    localStorage.setItem('sidebarCollapsed', this.collapsed);
  }
}

customElements.define('dashboard-layout', DashboardLayout);
