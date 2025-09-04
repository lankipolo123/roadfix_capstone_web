import { LitElement, html } from 'lit';
import { AUTH_FIELDS, AUTH_CONFIG } from '/src/constants/auth-configs.js';
import '../commons/textfield.js';
import './auth-buttons.js';
import { authFormStyles } from '/src/styles/loginform-styles.js';

class AuthForm extends LitElement {
  static styles = authFormStyles;

  static properties = {
    mode: { type: String },
    formData: { type: Object },
    errors: { type: Object },
    isLoading: { type: Boolean }
  };

  constructor() {
    super();
    this.mode = 'login';
    this.formData = {};
    this.errors = {};
    this.isLoading = false;
  }

  _handleInputChange(e) {
    const { name, value } = e.detail;
    this.formData = { ...this.formData, [name]: value };
    if (this.errors[name]) {
      this.errors = { ...this.errors, [name]: '' };
    }
  }

  _handleFormSubmit() {
    const fields = AUTH_FIELDS[this.mode];
    const newErrors = {};

    fields.forEach(field => {
      if (field.required && !this.formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (this.mode === 'signup' && this.formData.password !== this.formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    this.errors = newErrors;

    if (Object.keys(newErrors).length === 0) {
      this.dispatchEvent(new CustomEvent('auth-submit', {
        detail: { mode: this.mode, data: this.formData },
        bubbles: true
      }));
    }
  }

  _switchToSignup(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate-to', {
      detail: { path: '/signup' },
      bubbles: true,
      composed: true
    }));
  }

  _switchToLogin(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate-to', {
      detail: { path: '/login' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const config = AUTH_CONFIG[this.mode];
    const fields = AUTH_FIELDS[this.mode];

    return html`
      <div class="auth-card">
        <div class="form-header">
          <h1 class="form-title">${config.title}</h1>
          <p class="form-subtitle">${config.subtitle}</p>
        </div>

        <div class="form-fields">
          ${fields.map(field => html`
            <text-field
              name="${field.name}"
              type="${field.type}"
              label="${field.label}"
              placeholder="${field.placeholder}"
              ?required="${field.required}"
              .value="${this.formData[field.name] || ''}"
              .error="${this.errors[field.name] || ''}"
              @input-change="${this._handleInputChange}"
            ></text-field>
          `)}
        </div>

        <auth-buttons
          .mode="${this.mode}"
          .submitText="${config.submitText}"
          ?showRememberMe="${config.showRememberMe}"
          ?showForgotPassword="${config.showForgotPassword}"
          ?showGoogleSignin="${config.showGoogleSignin}"
          ?isLoading="${this.isLoading}"
          @form-submit="${this._handleFormSubmit}"
        ></auth-buttons>

        <div class="form-footer">
          ${this.mode === 'login'
        ? html`<p>Don't have an account? <a href="#" @click="${this._switchToSignup}">Sign Up</a></p>`
        : html`<p>Already have an account? <a href="#" @click="${this._switchToLogin}">Log In</a></p>`}
        </div>
      </div>
    `;
  }
}

customElements.define('auth-form', AuthForm);
