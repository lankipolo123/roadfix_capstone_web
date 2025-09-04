// app-modal.js
import { LitElement, html, css } from 'lit';
import '/src/components/commons/app-button.js';

export class AppModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String }
  };

  static styles = css`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 1000;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.35);
      font-family: Arial, sans-serif;
    }

    :host([open]) {
      display: flex;
    }

    .modal {
      background: #fff;
      border-radius: 8px;
      max-width: 360px;
      width: 85%;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-size: 0.85rem;
      position: relative;
    }

    .modal-header {
      padding: 0.6rem 1rem;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
      font-size: 0.9rem;
    }

    .modal-body {
      padding: 0.8rem 1rem;
      color: #333;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 0.6rem 1rem;
      border-top: 1px solid #e0e0e0;
    }
  `;

  constructor() {
    super();
    this.open = false;
    this.title = '';
  }

  // Disable closing by clicking outside
  _handleOutsideClick = (e) => {
    // do nothing
  };

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-closed'));
  }

  render() {
    return html`
      <div class="modal">
        ${this.title ? html`<div class="modal-header">${this.title}</div>` : ''}
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-modal', AppModal);
