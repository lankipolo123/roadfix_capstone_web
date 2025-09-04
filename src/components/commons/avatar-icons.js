import { LitElement, html, css } from 'lit';

export class UserAvatar extends LitElement {
  static properties = {
    src: { type: String },
    alt: { type: String },
    size: { type: Number },
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    img {
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.2s;
    }

    img:hover {
      transform: scale(1.05);
    }
  `;

  constructor() {
    super();
    // Built-in default avatar
    this.src = '/src/assets/default-avatar.jpg'; // <- default image
    this.alt = 'User Avatar';
    this.size = 84;
  }

  render() {
    return html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.size}"
        height="${this.size}"
        @click="${this.handleClick}"
      />
    `;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('avatar-click', {
      detail: { message: 'Avatar clicked' },
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define('user-avatar', UserAvatar);
