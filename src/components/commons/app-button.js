// app-button.js
import { LitElement, html, css } from 'lit';

export class AppButton extends LitElement {
  static properties = {
    type: { type: String }, // primary, secondary, danger
    size: { type: String }, // small, medium, large
    disabled: { type: Boolean }
  };

  static styles = css`
    button {
      font-family: Arial, sans-serif;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
      font-size: 0.85rem;
      padding: 0.45rem 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Types */
    button.primary {
      background-color: #007bff;
      color: #fff;
    }

    button.primary:hover:not(:disabled) {
      background-color: #0056b3;
    }

    button.secondary {
      background-color: #e0e0e0;
      color: #333;
    }

    button.secondary:hover:not(:disabled) {
      background-color: #d5d5d5;
    }

    button.danger {
      background-color: #dc3545;
      color: #fff;
    }

    button.danger:hover:not(:disabled) {
      background-color: #a71d2a;
    }

    /* Sizes */
    button.small {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

    button.medium {
      font-size: 0.85rem;
      padding: 0.45rem 0.9rem;
    }

    button.large {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  `;

  constructor() {
    super();
    this.type = 'primary';
    this.size = 'medium';
    this.disabled = false;
  }

  render() {
    return html`
      <button
        class="${this.type} ${this.size}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('app-button', AppButton);
