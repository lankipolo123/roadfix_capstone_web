import { LitElement, html } from 'lit';
import { authButtonStyles } from '/src/styles/auth-button-styles.js';

class AuthButtons extends LitElement {
  static styles = authButtonStyles;


  static properties = {
    mode: { type: String }, // 'login' or 'signin'
    submitText: { type: String },
    showRememberMe: { type: Boolean },
    showForgotPassword: { type: Boolean },
    showGoogleSignin: { type: Boolean },
    isLoading: { type: Boolean }
  };

  constructor() {
    super();
    this.mode = 'login';
    this.submitText = 'Submit';
    this.showRememberMe = false;
    this.showForgotPassword = false;
    this.showGoogleSignin = false;
    this.isLoading = false;
  }

  _handleSubmit() {
    this.dispatchEvent(new CustomEvent('form-submit', {
      bubbles: true
    }));
  }

  _handleGoogleSignin() {
    this.dispatchEvent(new CustomEvent('google-signin', {
      bubbles: true
    }));
  }

  _handleForgotPassword() {
    this.dispatchEvent(new CustomEvent('forgot-password', {
      bubbles: true
    }));
  }

  render() {
    return html`
      <div class="auth-options">
        ${this.showRememberMe || this.showForgotPassword ? html`
          <div class="remember-forgot">
            ${this.showRememberMe ? html`
              <label class="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            ` : html`<div></div>`}
            
            ${this.showForgotPassword ? html`
              <a href="#" class="forgot-password" @click="${this._handleForgotPassword}">
                Forgot password?
              </a>
            ` : ''}
          </div>
        ` : ''}
        
        <button 
          class="submit-btn" 
          ?disabled="${this.isLoading}"
          @click="${this._handleSubmit}"
        >
          ${this.isLoading ? 'Loading...' : this.submitText}
        </button>
        
        ${this.showGoogleSignin ? html`
          <div class="divider">or</div>
          <button class="google-btn" @click="${this._handleGoogleSignin}">
            <svg class="google-icon" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('auth-buttons', AuthButtons);