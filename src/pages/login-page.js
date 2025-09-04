import { LitElement, html } from 'lit';
import '/src/components/authentication_components/login-form.js';
import '/src/layouts/auth-layouts.js';

class LoginPage extends LitElement {
    static properties = {
        isLoading: { type: Boolean }
    };

    constructor() {
        super();
        this.isLoading = false;
    }

    _handleLoginSubmit(e) {
        const data = e.detail;
        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
            alert(`Login successful for ${data.email || 'user'}!`);
            this.dispatchEvent(new CustomEvent('navigate-to', {
                detail: { path: '/dashboard' },
                bubbles: true,
                composed: true
            }));
        }, 2000);
    }

    _navigateToSignup() {
        this.dispatchEvent(new CustomEvent('navigate-to', {
            detail: { path: '/signup' },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <auth-layout>
        <login-form
          ?isLoading="${this.isLoading}"
          @login-submit="${this._handleLoginSubmit}"
          @navigate-to-signup="${this._navigateToSignup}"
        ></login-form>
      </auth-layout>
    `;
    }
}

customElements.define('login-page', LoginPage);
