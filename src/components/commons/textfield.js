import { LitElement, html } from 'lit';
import { textfieldStyles } from '/src/styles/textfield-styles.js';

class TextField extends LitElement {
  static styles = textfieldStyles;

  static properties = {
    name: { type: String },
    type: { type: String },
    label: { type: String },
    placeholder: { type: String },
    required: { type: Boolean },
    value: { type: String },
    error: { type: String }
  };

  constructor() {
    super();
    this.type = 'text';
    this.value = '';
    this.error = '';
  }

  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { name: this.name, value: this.value },
      bubbles: true
    }));
  }

  render() {
    return html`
      <div class="field">
        <label for="${this.name}">
          ${this.label}
          ${this.required ? html`<span class="required">*</span>` : ''}
        </label>
        <input
          id="${this.name}"
          name="${this.name}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          class="${this.error ? 'error' : ''}"
          @input="${this._handleInput}"
        />
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }
}

customElements.define('text-field', TextField);