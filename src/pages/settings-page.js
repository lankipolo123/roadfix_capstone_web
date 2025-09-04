import { LitElement, html } from 'lit';
import '/src/components/commons/page-header.js';
import '/src/components/commons/page-content.js';
import { pageStyles } from '/src/styles/page-styles.js';
import '/src/layouts/settings-layouts.js';
import '/src/components/setting-components/profile-header.js';
import '/src/components/setting-components/personal-info-form.js';
import '/src/components/setting-components/manage-account-card.js';

export class SettingsPage extends LitElement {
  static styles = pageStyles;

  render() {
    return html`
      <page-header title="Settings / Profile"></page-header>
      <page-content mode="2">
        <settings-layout>
          <!-- top-left -->
          <profile-header slot="one"></profile-header>

          <!-- RIGHT SIDE = Manage Account wrapper card -->
          <manage-account-card slot="two"></manage-account-card>

          <!-- bottom-left = personal info -->
          <personal-info-form slot="three"></personal-info-form>
        </settings-layout>
      </page-content>
    `;
  }
}

customElements.define('settings-page', SettingsPage);
