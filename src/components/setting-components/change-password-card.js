import { LitElement, html, css } from 'lit';
import '/src/components/commons/app-button.js';

export class ChangePasswordCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-title {
      font-weight: bold;
      font-size: 0.95rem;
      margin: 0;
      text-align: center;
    }

    .section-description {
      font-size: 0.8rem;
      color: #555;
      text-align: center;
      margin-bottom: 8px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      font-size: 0.85rem;
    }

    input {
      padding: 6px 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-top: 4px;
      font-size: 0.85rem;
    }

    .reminder {
      background-color: #f9f9f9;
      padding: 6px;
      border-left: 3px solid #007AFF;
      font-size: 0.75rem;
      color: #333;
      border-radius: 3px;
    }
  `;

  render() {
    return html`
      <div class="section">
        <div class="section-title">Change Password</div>
        <div class="section-description">
          Choose a strong password to protect your account and keep it secure.
        </div>

        <form @submit=${this.handleSubmit}>
          <label>
            Current Password
            <input type="password" placeholder="Current password" required />
          </label>
          <label>
            New Password
            <input type="password" placeholder="New password" required />
          </label>
          <app-button type="primary" size="medium">Change Password</app-button>
        </form>
      </div>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Password updated (simulated).');
  }
}

customElements.define('change-password-card', ChangePasswordCard);
