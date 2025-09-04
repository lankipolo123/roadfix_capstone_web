import { html } from 'lit';

function renderActive(isActive) {
  return html`
    <span style="color:${isActive ? 'green' : 'red'}; font-weight:bold;">
      ${isActive ? 'Yes' : 'No'}
    </span>
  `;
}

export const USERS_TABLE_CONF = [
  { property: 'fname', header: 'First Name' },
  { property: 'lname', header: 'Last Name' },
  { property: 'email', header: 'Email' },
  { property: 'role', header: 'Role' },
  { property: 'reportsCount', header: 'Reports' },
  { property: 'pendingCount', header: 'Pending' },
  { property: 'isActive', header: 'Active', html: (val) => renderActive(val) },
];
