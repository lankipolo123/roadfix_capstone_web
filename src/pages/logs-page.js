// logs-page.js
import { LitElement, html, css } from 'lit';

export class LogsPage extends LitElement {
    static styles = css`
    :host {
      display: block;
      padding: 1.5rem;
      font-family: sans-serif;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f4f4f4;
    }

    tr:hover {
      background-color: #f9f9f9;
    }
  `;

    static properties = {
        logs: { type: Array }
    };

    constructor() {
        super();
        // Example log data
        this.logs = [
            { time: '2025-09-04 09:00', user: 'Admin', action: 'Logged in' },
            { time: '2025-09-04 09:15', user: 'Admin', action: 'Viewed Reports' },
            { time: '2025-09-04 09:30', user: 'User1', action: 'Submitted Report' },
        ];
    }

    render() {
        return html`
      <h1>Activity Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${this.logs.map(log => html`
            <tr>
              <td>${log.time}</td>
              <td>${log.user}</td>
              <td>${log.action}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
    }
}

customElements.define('logs-page', LogsPage);
