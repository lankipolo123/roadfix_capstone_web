import { LitElement, html } from 'lit';
import '/src/components/commons/page-header.js';
import '/src/components/commons/page-content.js';
import '/src/components/commons/data-table.js';
import { pageStyles } from '/src/styles/page-styles.js';
import { mockUsers } from '/src/mock_datas/mock_users.js';
import { USERS_TABLE_CONF } from '/src/constants/users-table-config.js';

export class UsersPage extends LitElement {
  static styles = pageStyles;

  render() {
    return html`
      <page-header title="Users"></page-header>
      <page-content mode="1">
        <h2>Users List</h2>
                  <data-table 
                .data=${mockUsers} 
                .conf=${USERS_TABLE_CONF}
                mode="3"> <!-- Only bottom borders for a cleaner look -->
              </data-table>
      </page-content>
    `;
  }
}

customElements.define('users-page', UsersPage);
