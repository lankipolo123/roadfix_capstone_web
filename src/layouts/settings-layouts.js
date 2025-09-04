import { LitElement, html, css } from 'lit';

export class SettingsLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .layout-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 16px;
      width: 100%;
      min-height: 400px;
    }

    .div1 {
      grid-column: span 3 / span 3;
    }

    .div2 {
      grid-column: span 2 / span 2;
      grid-row: span 5 / span 5;
      grid-column-start: 4;
    }

    .div3 {
      grid-column: span 3 / span 3;
      grid-row: span 4 / span 4;
      grid-row-start: 2;
    }

    ::slotted(*) {
      width: 100%;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <div class="layout-container">
        <div class="div1">
          <slot name="one"></slot>
        </div>
        <div class="div2">
          <slot name="two"></slot>
        </div>
        <div class="div3">
          <slot name="three"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('settings-layout', SettingsLayout);
