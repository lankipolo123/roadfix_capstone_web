import { LitElement, html, css } from 'lit';

export class MenuPopup extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
    items: { type: Array },
    triggerIcon: { type: String },
    position: { type: String }, // 'right', 'left', 'center'
    size: { type: String }, // 'small', 'medium', 'large'
  };

  constructor() {
    super();
    this.isOpen = false;
    this.items = [];
    this.triggerIcon = '⋮';
    this.position = 'right';
    this.size = 'medium';
  }

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    .menu-trigger {
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      color: #6b7280;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu-trigger:hover {
      background: #f3f4f6;
      color: #374151;
    }

    .menu-trigger.small {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }

    .menu-trigger.medium {
      width: 24px;
      height: 24px;
      font-size: 14px;
    }

    .menu-trigger.large {
      width: 32px;
      height: 32px;
      font-size: 16px;
    }

    .menu-dropdown {
      position: absolute;
      top: 100%;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: all 0.15s ease-out;
      min-width: 120px;
    }

    .menu-dropdown.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .menu-dropdown.position-right {
      right: 0;
    }

    .menu-dropdown.position-left {
      left: 0;
    }

    .menu-dropdown.position-center {
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
    }

    .menu-dropdown.position-center.open {
      transform: translateX(-50%) translateY(0);
    }

    .menu-dropdown.small {
      min-width: 100px;
    }

    .menu-dropdown.medium {
      min-width: 120px;
    }

    .menu-dropdown.large {
      min-width: 160px;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 12px;
      text-align: left;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 13px;
      color: #374151;
      transition: background-color 0.1s;
      border-bottom: 1px solid transparent;
    }

    .menu-item:last-child {
      border-bottom: none;
    }

    .menu-item:hover { 
      background: #f3f4f6; 
      color: #111827;
    }

    .menu-item.primary:hover { 
      background: #dbeafe; 
      color: #1e40af;
    }

    .menu-item.success:hover { 
      background: #f0fdf4; 
      color: #065f46;
    }

    .menu-item.warning:hover { 
      background: #fefce8; 
      color: #a16207;
    }

    .menu-item.danger:hover { 
      background: #fef2f2; 
      color: #991b1b;
    }

    .menu-item:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .menu-item:disabled:hover {
      background: none;
      color: #374151;
    }

    .menu-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 4px 0;
    }

    .menu-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu-text {
      flex: 1;
    }

    .menu-shortcut {
      font-size: 11px;
      color: #9ca3af;
      margin-left: auto;
    }
  `;

  toggleMenu(event) {
    event?.stopPropagation();
    this.isOpen = !this.isOpen;
    this.dispatchEvent(new CustomEvent('menu-toggle', {
      detail: { isOpen: this.isOpen },
      bubbles: true,
      composed: true
    }));
  }

  closeMenu() {
    this.isOpen = false;
  }

  handleItemClick(item, event) {
    event.stopPropagation();

    if (item.disabled) return;

    this.closeMenu();

    this.dispatchEvent(new CustomEvent('menu-item-click', {
      detail: {
        action: item.action,
        item: item,
        value: item.value
      },
      bubbles: true,
      composed: true
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    this._handleDocumentClick = () => this.closeMenu();
    document.addEventListener('click', this._handleDocumentClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleDocumentClick);
  }

  renderMenuItem(item) {
    if (item.type === 'divider') {
      return html`<div class="menu-divider"></div>`;
    }

    return html`
      <button 
        class="menu-item ${item.variant || ''}"
        ?disabled=${item.disabled}
        @click=${(e) => this.handleItemClick(item, e)}
      >
        ${item.icon ? html`<span class="menu-icon">${item.icon}</span>` : ''}
        <span class="menu-text">${item.label}</span>
        ${item.shortcut ? html`<span class="menu-shortcut">${item.shortcut}</span>` : ''}
      </button>
    `;
  }

  render() {
    return html`
      <button 
        class="menu-trigger ${this.size}"
        @click=${this.toggleMenu}
      >
        ${this.triggerIcon}
      </button>
      
      <div class="menu-dropdown ${this.isOpen ? 'open' : ''} position-${this.position} ${this.size}">
        ${this.items.map(item => this.renderMenuItem(item))}
      </div>
    `;
  }
}

customElements.define('menu-popup', MenuPopup);