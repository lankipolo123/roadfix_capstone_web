import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@2.7.4/+esm';
import '/src/components/authentication_components/signup-form.js';
import '/src/layouts/auth-layouts.js';

class SignUpPage extends LitElement {
    static properties = {
        isLoading: { type: Boolean }
    };

    constructor() {
        super();
        this.isLoading = false;
    }

    async _handleSignupSubmit(e) {
        const data = e.detail;
        this.isLoading = true;

        try {
            console.log('Signup attempt:', data);
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Account created successfully!');
            this.dispatchEvent(new CustomEvent('navigate-to', {
                detail: { path: '/login' },
                bubbles: true,
                composed: true
            }));
        } catch (err) {
            console.error(err);
            alert('Signup failed!');
        } finally {
            this.isLoading = false;
        }
    }

    _navigateToLogin() {
        this.dispatchEvent(new CustomEvent('navigate-to', {
            detail: { path: '/login' },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <auth-layout>
        <signup-form
          ?isLoading="${this.isLoading}"
          @signup-submit="${this._handleSignupSubmit}"
          @navigate-to-login="${this._navigateToLogin}"
        ></signup-form>
      </auth-layout>
    `;
    }
}

customElements.define('signup-page', SignUpPage);
