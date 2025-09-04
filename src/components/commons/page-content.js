import { LitElement, html, css } from 'lit';

export class PageContent extends LitElement {
  static properties = {
    mode: { type: Number }
  };

  constructor() {
    super();
    this.mode = 1;
  }

  static styles = css`
    :host {
      display: block;
      height: calc(100vh - 60px); /* subtract header height if header is 60px */
      overflow-y: auto; /* THIS makes the content scrollable */
    }

    .page-content {
      margin: 1rem;
      padding: 1rem;
      border-radius: 8px;
      box-sizing: border-box;
      transition: all 0.3s ease;
    }

    :host([mode="1"]) .page-content {
      background-color: #ffffff;
      border: 1px solid #e6dfdfff;
    }

    :host([mode="2"]) .page-content {
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
  `;

  render() {
    return html`
      <div class="page-content">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('page-content', PageContent);
