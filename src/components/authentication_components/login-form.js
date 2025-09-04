import { LitElement, html } from 'lit';
import { AUTH_FIELDS, AUTH_CONFIG } from '/src/constants/auth-configs.js';
import '../commons/textfield.js';
import './auth-buttons.js';
import { LoginFormStyles } from '/src/styles/loginform-styles.js';

class LoginForm extends LitElement {
  static styles = LoginFormStyles;

  static properties = {
    formData: { type: Object },
    errors: { type: Object },
    isLoading: { type: Boolean }
  };

  constructor() {
    super();
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
    const fields = AUTH_FIELDS.login;
    const newErrors = {};

    fields.forEach(field => {
      if (field.required && !this.formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    this.errors = newErrors;

    if (Object.keys(newErrors).length === 0) {
      this.dispatchEvent(new CustomEvent('login-submit', {
        detail: this.formData,
        bubbles: true
      }));
    }
  }

  _goToSignup(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate-to-signup', { bubbles: true }));
  }

  render() {
    const config = AUTH_CONFIG.login;
    const fields = AUTH_FIELDS.login;

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
          .submitText="${config.submitText}"
          ?showRememberMe="${config.showRememberMe}"
          ?showForgotPassword="${config.showForgotPassword}"
          ?showGoogleSignin="${config.showGoogleSignin}"
          ?isLoading="${this.isLoading}"
          @form-submit="${this._handleFormSubmit}"
        ></auth-buttons>

        <div class="form-footer">
          <p>Don't have an account? <a href="#" @click="${this._goToSignup}">Sign Up</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('login-form', LoginForm);
