// reports-page.js
import { LitElement, html } from 'lit';
import '/src/components/commons/page-header.js';
import '/src/components/commons/page-content.js';
import '/src/components/commons/data-table.js';
import { pageStyles } from '/src/styles/page-styles.js';
import { mockReports } from '/src/mock_datas/mock_reports.js';
import { REPORTS_TABLE_CONF } from '/src/constants/reports-table-config.js';

export class ReportsPage extends LitElement {
  static properties = {
    reports: { type: Array },
    loading: { type: Boolean }
  };

  static styles = pageStyles;

  constructor() {
    super();
    this.reports = mockReports;
    this.loading = false;
  }

  // Firebase-ready method (currently using mock data)
  async loadReports() {
    this.loading = true;

    try {
      // TODO: Replace with actual Firebase call
      // const reportsCollection = collection(db, 'reports');
      // const querySnapshot = await getDocs(reportsCollection);
      // this.reports = querySnapshot.docs.map(doc => ({
      //     id: doc.id,
      //     ...doc.data()
      // }));

      // Mock delay to simulate Firebase call
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.reports = mockReports;
    } catch (error) {
      console.error('Error loading reports:', error);
    } finally {
      this.loading = false;
    }
  }

  // Firebase-ready method for updating report status
  async updateReportStatus(reportId, newStatus) {
    try {
      // TODO: Replace with actual Firebase call
      // const reportRef = doc(db, 'reports', reportId);
      // await updateDoc(reportRef, {
      //     status: newStatus,
      //     reviewedAt: new Date(),
      //     reviewedBy: 'admin@roadfix.com' // Get from auth context
      // });

      // Mock update for now
      this.reports = this.reports.map(report =>
        report.id === reportId
          ? {
            ...report,
            status: newStatus,
            reviewedAt: new Date(),
            reviewedBy: 'admin@roadfix.com'
          }
          : report
      );

      console.log(`Report ${reportId} status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating report status:', error);
    }
  }

  handleTableAction(event) {
    const { action, item } = event.detail;

    switch (action) {
      case 'approve':
        this.updateReportStatus(item.id, 'approved');
        break;
      case 'reject':
        this.updateReportStatus(item.id, 'rejected');
        break;
      case 'view':
        // TODO: Navigate to report detail page
        console.log('Viewing report:', item.id);
        break;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadReports();
  }

  render() {
    return html`
            <page-header title="Reports Management"></page-header>
            <page-content mode="1">
                <div style="margin-bottom: 24px;">
                    <h2>Reports List</h2>
                    <p style="color: #6b7280; margin-top: 8px;">
                        Manage and review road maintenance reports
                    </p>
                </div>
                <data-table 
                  .data=${this.reports} 
                  .conf=${REPORTS_TABLE_CONF}
                  .loading=${this.loading}
                  mode="2"  <!-- Classic bordered table with headers and row borders -->
                  @table-action=${this.handleTableAction}>
                </data-table>
            </page-content>
        `;
  }
}

customElements.define('reports-page', ReportsPage);

