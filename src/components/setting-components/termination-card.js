import { LitElement, html, css } from 'lit';

export class TerminationCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      font-weight: bold;
      font-size: 0.95rem;
      margin: 0;
      padding-bottom: 8px;
      color: #000000ff;
      text-align: center;
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: stretch; /* stretch vertically */
      border-radius: 1px;
      overflow: hidden;
      width: fit-content; /* shrink to fit content */
      margin: 0 auto; /* center the buttons */
    }

    .action {
      text-align: center;
      padding: 6px 12px; /* reduce horizontal space */
      font-size: 0.9rem;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
      transition: text-decoration 0.2s;
    }

    .action:hover {
      text-decoration: underline; /* underline on hover */
    }

    .action + .action {
      border-left: 1.2px solid #ddd; /* vertical divider */
    }

    .disable {
      color: #ff6606ff;
      font-weight: bold;
    }

    .delete {
      color: #c62828;
      font-weight: bold;
    }

    .notice {
      font-size: 0.8rem;
      color: #474545ff;
      text-align: center;
      margin-top: 12px;
    }
  `;

  render() {
    return html`
      <div class="section">
        <div class="section-title">Account Termination</div>

        <div class="actions">
          <div class="action disable" @click=${this.disableAccount}>
            Deactivate Account
          </div>
          <div class="action delete" @click=${this.deleteAccount}>
            Delete Account
          </div>
        </div>

        <div class="notice">
          You can temporarily deactivate your account or permanently delete it. Deleting is irreversible.
        </div>
      </div>
    `;
  }

  disableAccount() {
    if (confirm('Are you sure you want to deactivate your account?')) {
      alert('Account deactivated (simulated).');
    }
  }

  deleteAccount() {
    if (confirm('Are you sure you want to permanently delete your account? This cannot be undone.')) {
      alert('Account deleted (simulated).');
    }
  }
}

customElements.define('termination-card', TerminationCard);
