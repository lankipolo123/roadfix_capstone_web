import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@2.7.4/+esm';

// Pages
import './src/pages/login-page.js';
import './src/pages/signup-page.js';
import './src/pages/dashboard-page.js';
import './src/pages/reports-page.js';
import './src/pages/users-page.js';
import './src/pages/settings-page.js';
import './src/pages/logs-page.js'; // <-- added logs page

// Layouts
import './src/layouts/auth-layouts.js';
import './src/layouts/dashboard-layouts.js';

class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  `;

  static properties = {
    route: { type: String }
  };

  constructor() {
    super();
    this.route = this._getCurrentRoute();

    window.addEventListener('hashchange', () => {
      this.route = this._getCurrentRoute();
    });
  }

  _getCurrentRoute() {
    return window.location.hash.replace('#', '') || '/login';
  }

  navigate(path) {
    window.location.hash = path;
    this.route = path;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('navigate-to', (e) => {
      this.navigate(e.detail.path);
    });
  }

  render() {
    switch (this.route) {
      case '/login':
        return html`
          <auth-layout>
            <login-page></login-page>
          </auth-layout>
        `;
      case '/signup':
        return html`
          <auth-layout>
            <signup-page></signup-page>
          </auth-layout>
        `;
      case '/dashboard':
        return html`
          <dashboard-layout @navigate=${(e) => this.navigate(e.detail)}>
            <dashboard-page></dashboard-page>
          </dashboard-layout>
        `;
      case '/user':
        return html`
          <dashboard-layout @navigate=${(e) => this.navigate(e.detail)}>
            <users-page></users-page>
          </dashboard-layout>
        `;
      case '/reports':
        return html`
          <dashboard-layout @navigate=${(e) => this.navigate(e.detail)}>
            <reports-page></reports-page>
          </dashboard-layout>
        `;
      case '/logs':   // <-- added logs route
        return html`
          <dashboard-layout @navigate=${(e) => this.navigate(e.detail)}>
            <logs-page></logs-page>
          </dashboard-layout>
        `;
      case '/settings':
        return html`
          <dashboard-layout @navigate=${(e) => this.navigate(e.detail)}>
            <settings-page></settings-page>
          </dashboard-layout>
        `;
      default:
        return html`
          <h2>Page not found. <a href="#/login">Go to Login</a></h2>
        `;
    }
  }
}

customElements.define('my-app', MyApp);
