// dual-title.js
import { LitElement, html, css } from 'lit';

export class DualTitle extends LitElement {
  static properties = {
    first: { type: String },   // First part of the title
    second: { type: String },  // Second part of the title
    firstColor: { type: String },  // Optional color for first part
    secondColor: { type: String }  // Optional color for second part
  };

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 1rem;
    }

    .first {
      display: inline;
    }

    .second {
      display: inline;
    }
  `;

  constructor() {
    super();
    this.first = '';
    this.second = '';
    this.firstColor = '#242526';  // default dark color
    this.secondColor = '#ffae0b'; // default accent color
  }

  render() {
    return html`
      <span class="first" style="color:${this.firstColor}">${this.first}</span>
      <span class="second" style="color:${this.secondColor}">${this.second}</span>
    `;
  }
}

customElements.define('dual-title', DualTitle);
