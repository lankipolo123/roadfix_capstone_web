// sidebar.js
import { LitElement, html } from 'lit';
import { sidebarStyles } from '/src/styles/sidebar-styles.js';
import '/src/components/commons/app-modal.js';
import '/src/components/commons/app-button.js';
import '/src/components/commons/dual-title.js';

export class Sidebar extends LitElement {
  static styles = sidebarStyles;

  static properties = {
    collapsed: { type: Boolean, reflect: true },
    activeRoute: { type: String },
    logoutModalOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.collapsed = false;
    this.activeRoute = window.location.hash || '#/dashboard';
    this.logoutModalOpen = false;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('hashchange', () => {
      this.activeRoute = window.location.hash;
      this.requestUpdate();
    });
  }

  _openLogoutModal() {
    this.logoutModalOpen = true;
  }

  _confirmLogout() {
    this.logoutModalOpen = false;
    window.location.hash = '/login';
  }

  _closeModal() {
    this.logoutModalOpen = false;
  }

  _goToDashboard() {
    window.location.hash = '#/dashboard';
    this.activeRoute = '#/dashboard';
  }

  render() {
    return html`
      <aside>
        <div class="logo-section" @click="${this._goToDashboard}" style="cursor:pointer;">
          <img src="/src/assets/roadfix-adminlogo.png" alt="RoadFix Logo" class="logo" />
        </div>

        <nav>
          <ul>
            <li class="${this.activeRoute === '#/dashboard' ? 'active' : ''}">
              <a href="#/dashboard" class="${this.activeRoute === '#/dashboard' ? 'active' : ''}">
                <span class="material-symbols-outlined">dashboard</span>
                <span class="label">Overview</span>
              </a>
            </li>
            <li class="${this.activeRoute === '#/user' ? 'active' : ''}">
              <a href="#/user" class="${this.activeRoute === '#/user' ? 'active' : ''}">
                <span class="material-symbols-outlined">groups</span>
                <span class="label">Members</span>
              </a>
            </li>
            <li class="${this.activeRoute === '#/reports' ? 'active' : ''}">
              <a href="#/reports" class="${this.activeRoute === '#/reports' ? 'active' : ''}">
                <span class="material-symbols-outlined">report</span>
                <span class="label">Reports</span>
              </a>
            </li>
            <li class="${this.activeRoute === '#/logs' ? 'active' : ''}">
              <a href="#/logs" class="${this.activeRoute === '#/logs' ? 'active' : ''}">
                <span class="material-symbols-outlined">history</span>
                <span class="label">Logs</span>
              </a>
            </li>
            <li class="${this.activeRoute === '#/settings' ? 'active' : ''}">
              <a href="#/settings" class="${this.activeRoute === '#/settings' ? 'active' : ''}">
                <span class="material-symbols-outlined">settings_account_box</span>
                <span class="label">My Account</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="logout">
          <button @click="${this._openLogoutModal}">
            <span class="material-symbols-outlined">logout</span>
            <span class="label">Logout</span>
          </button>
        </div>
      </aside>

      <!-- Logout Confirmation Modal -->
      <app-modal .open="${this.logoutModalOpen}">
        <dual-title first="Confirm " second="Logout"></dual-title>
        <p style="margin-top:0.5rem;">Are you sure you want to log out?</p>
        <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem;">
          <app-button type="secondary" size="medium" @click="${this._closeModal}">Cancel</app-button>
          <app-button type="danger" size="medium" @click="${this._confirmLogout}">Logout</app-button>
        </div>
      </app-modal>
    `;
  }
}

customElements.define('app-sidebar', Sidebar);
