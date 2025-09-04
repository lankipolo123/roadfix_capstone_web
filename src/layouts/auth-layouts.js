import { LitElement, html, css } from 'lit';

class AuthLayout extends LitElement {
  static styles = css`
    .auth-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: #f9fafb; /* page background */
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <div class="auth-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('auth-layout', AuthLayout);
