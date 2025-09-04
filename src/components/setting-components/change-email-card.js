import { LitElement, html, css } from 'lit';
import '/src/components/commons/app-button.js';

export class ChangeEmailCard extends LitElement {
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
  `;

    render() {
        return html`
      <div class="section">
        <div class="section-title">Change Email</div>
        <div class="section-description">
          Update your email address to receive account notifications at your new email.
        </div>

        <form @submit=${this.handleSubmit}>
          <label>
            New Email
            <input type="email" placeholder="Enter new email" required />
          </label>
          <app-button type="primary" size="medium">Update Email</app-button>
        </form>
      </div>
    `;
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Email updated (simulated).');
    }
}

customElements.define('change-email-card', ChangeEmailCard);
