import { LitElement, html, css } from 'lit';

export class MenuPopup extends LitElement {
    static properties = {
        isOpen: { type: Boolean },
        items: { type: Array },
        triggerIcon: { type: String },
        position: { type: String }, // right/left/center
        size: { type: String }, // small/medium/large
    };

    constructor() {
        super();
        this.isOpen = false;
        this.items = [];
        this.triggerIcon = '⋮';
        this.position = 'right';
        this.size = 'medium';

        // bind handlers
        this._onDocumentClick = this._onDocumentClick.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-trigger:hover {
      background: #f3f4f6;
      color: #374151;
    }
    .menu-dropdown {
      position: absolute;
      top: 100%;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
      z-index: 99999; /* bump so it shows above table */
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: all 0.12s ease-out;
      min-width: 140px;
    }
    .menu-dropdown.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .menu-dropdown.position-right { right: 0; }
    .menu-dropdown.position-left { left: 0; }
    .menu-dropdown.position-center {
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
    }
    .menu-dropdown.position-center.open {
      transform: translateX(-50%) translateY(0);
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
    }
    .menu-item:hover {
      background: #f3f4f6;
      color: #111827;
    }
    .menu-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 6px 0;
    }
    .menu-icon {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-shortcut {
      margin-left: auto;
      font-size: 11px;
      color: #9ca3af;
    }
  `;

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this._onDocumentClick);
        document.addEventListener('keydown', this._onKeyDown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this._onDocumentClick);
        document.removeEventListener('keydown', this._onKeyDown);
    }

    _onDocumentClick(e) {
        if (!e.composedPath().includes(this)) {
            this.isOpen = false;
        }
    }

    _onKeyDown(e) {
        if (e.key === 'Escape') {
            this.isOpen = false;
        }
    }

    toggleMenu(e) {
        e.stopPropagation();
        this.isOpen = !this.isOpen;
    }

    closeMenu() {
        this.isOpen = false;
    }

    handleItemClick(item, e) {
        e.stopPropagation();
        if (item.disabled) return;
        this.closeMenu();
        this.dispatchEvent(
            new CustomEvent('menu-item-click', {
                detail: { action: item.action, item, value: item.value },
                bubbles: true,
                composed: true,
            })
        );
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
        <span>${item.label}</span>
        ${item.shortcut
                ? html`<span class="menu-shortcut">${item.shortcut}</span>`
                : ''}
      </button>
    `;
    }

    render() {
        return html`
      <button
        class="menu-trigger ${this.size}"
        @click=${(e) => this.toggleMenu(e)}
        aria-haspopup="true"
        aria-expanded=${this.isOpen}
      >
        ${this.triggerIcon}
      </button>

      <div
        class="menu-dropdown ${this.isOpen ? 'open' : ''} position-${this.position} ${this.size}"
      >
        ${this.items.map((item) => this.renderMenuItem(item))}
      </div>
    `;
    }
}

customElements.define('menu-popup', MenuPopup);
