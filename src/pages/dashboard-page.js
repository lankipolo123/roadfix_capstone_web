import { LitElement, html } from 'lit';
import '/src/components/commons/page-header.js';
import '/src/components/commons/page-content.js';
import '/src/components/commons/data-table.js';
import { pageStyles } from '/src/styles/page-styles.js';
import { mockReports } from '/src/mock_datas/mock_reports.js';
import { REPORTS_TABLE_CONF } from '/src/constants/reports-table-config.js';

export class DashboardPage extends LitElement {
  static styles = pageStyles;

  render() {
    return html`
      <page-header title="Dashboard"></page-header>
      <page-content mode="1">
        <h2>Recent Reports</h2>
        <p style="color: #6b7280; margin-bottom: 16px;">
          Latest road maintenance reports submitted by users
        </p>

        <!-- Recent Reports Table: no thead, just tbody -->
       <h2>Recent Reports</h2>
                  <data-table 
                    .data=${this.reports || mockReports} 
                    .conf=${REPORTS_TABLE_CONF} 
                    mode="2">
                  </data-table>
      </page-content>
    `;
  }
}

customElements.define('dashboard-page', DashboardPage);
