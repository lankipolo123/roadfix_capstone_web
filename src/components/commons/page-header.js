import { LitElement, html } from 'lit';
import { PageHeaderStyles } from '/src/styles/page-header-styles.js';

export class PageHeader extends LitElement {
  static properties = { title: { type: String } };
  static styles = PageHeaderStyles;

  constructor() {
    super();
    this.title = 'Default Title';
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
      </header>
    `;
  }
}

customElements.define('page-header', PageHeader);
