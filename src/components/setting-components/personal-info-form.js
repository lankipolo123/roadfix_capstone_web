import { LitElement, html, css } from 'lit';
import '/src/components/commons/app-button.js';

export class PersonalInfoForm extends LitElement {
  static properties = {
    editing: { type: Boolean }
  };

  constructor() {
    super();
    this.editing = false;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: Arial, sans-serif;
      font-size: 0.9rem;
      color: #333;
    }

    .material-symbols-outlined {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      font-family: 'Material Symbols Outlined';
      font-size: 28px;
      color: white; /* default color when not editing */
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .material-symbols-outlined.active {
      color: #ffae0b; /* gold-orange when editing */
    }

    .form-card {
      background: #fff;
      border-radius: 10px;
      border: 1.2px solid #adadadff;
      overflow: hidden;
    }

    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
      font-weight: bold;
      color: white;
      padding: 20px 24px;
      background-color: #43454C;
    }

    form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
      padding: 20px 24px;
      align-items: start;
    }

    form > div {
      display: flex;
      flex-direction: column;
    }

    label {
      display: block;
      font-weight: 500;
      margin-bottom: 6px;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 0.95rem;
      box-sizing: border-box;
      background-color: #f5f5f5;
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    input:not(:disabled),
    select:not(:disabled),
    textarea:not(:disabled) {
      background-color: white;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 3px rgba(0,123,255,0.3);
    }

    textarea {
      resize: vertical;
      height: 60px;
    }

    input:disabled, select:disabled, textarea:disabled {
      cursor: not-allowed;
    }

    .save-button {
      margin-top: 16px;
      grid-column: 1 / -1;
    }
  `;

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=edit_square"
      />

      <div class="form-card">
        <div class="form-header">
          Personal Information
          <span
            class="material-symbols-outlined ${this.editing ? 'active' : ''}"
            @click="${this.toggleEdit}"
          >
            edit_square
          </span>
        </div>

        <form @submit="${this.handleSubmit}">
          <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="mi">MI</label>
            <input type="text" id="mi" name="mi" maxlength="1" .disabled="${!this.editing}" />
          </div>
          <div>
            <label for="birthDate">Birth Date</label>
            <input type="date" id="birthDate" name="birthDate" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="contact">Contact</label>
            <input type="tel" id="contact" name="contact" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="gender">Gender</label>
            <select id="gender" name="gender" .disabled="${!this.editing}">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="homeAddress">Address</label>
            <textarea id="homeAddress" name="homeAddress" .disabled="${!this.editing}" required></textarea>
          </div>

          ${this.editing
        ? html`<div class="save-button">
                <app-button type="primary" size="medium" @click="${this.handleSubmit}">
                  Save
                </app-button>
              </div>`
        : ''}
        </form>
      </div>
    `;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this.shadowRoot.querySelector('form'));
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    console.log('Form submitted:', data);
    alert('Personal information submitted!');
    this.editing = false;
  }
}

customElements.define('personal-info-form', PersonalInfoForm);
