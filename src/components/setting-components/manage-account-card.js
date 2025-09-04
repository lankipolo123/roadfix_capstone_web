import { LitElement, html, css } from 'lit';
import './change-email-card.js';
import './change-password-card.js';
import './termination-card.js';

export class ManageAccountCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    /* Material Symbols styling for icons (not bold) */
    .material-symbols-outlined {
      font-variation-settings:
        'FILL' 0,  /* ensures icon is not bold/filled */
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      font-family: 'Material Symbols Outlined';
      font-size: 24px;
      color: black;
      cursor: pointer;
    }

    .account-card {
      background: #fff;
      padding: 16px;
      border-radius: 8px;
      border: 1.2px solid #adadadff;
      font-family: Arial, sans-serif;
      font-size: 0.9rem;
    }

    .card-title {
      display: flex;
      align-items: center;
      justify-content: space-between; /* icon on the right */
      font-weight: bold; /* text stays bold */
      font-size: 1rem;
      color: #ffae0b;
      margin-left: -16px;
      margin-right: -16px;
      padding: 0 16px 12px;
      border-bottom: 1.2px solid #adadadff;
    }

    .section {
      margin-left: -16px;
      margin-right: -16px;
      padding: 16px;
      border-bottom: 1.2px solid #adadadff;
    }

    .section:last-of-type {
      border-bottom: none;
    }
  `;

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=manage_accounts"
      />
      <div class="account-card">
        <div class="card-title">
          Manage Your Account
          <span class="material-symbols-outlined">manage_accounts</span>
        </div>

        <div class="section">
          <change-email-card></change-email-card>
        </div>

        <div class="section">
          <change-password-card></change-password-card>
        </div>

        <div class="section">
          <termination-card></termination-card>
        </div>
      </div>
    `;
  }
}

customElements.define('manage-account-card', ManageAccountCard);
