import { css } from 'lit';

export const dataTableStyles = css`
.table-container { 
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb; 
    box-shadow: 0 1px 3px rgba(30, 27, 27, 0.1); 
}

/* Remove previous table-header (filter / columns) */
.table-header { display: none; }

table { 
    width: 100%; 
    border-collapse: collapse; 
}

thead { background: #f5f8fa; }

th { 
    padding: 8px 12px; 
    text-align: left; 
    font-weight: 500; 
    font-size: 12px; 
    color: #0f0f0f; 
    text-transform: uppercase; 
    letter-spacing: 0.05em; 
}

td { 
    padding: 8px 12px; 
    font-size: 13px; 
    color: #374151; 
    border-bottom: 1px solid #f3f4f6; 
    vertical-align: top;
}

/* Mode-specific styles */
:host(.mode-1) table th { border: 1px solid #ccc; }
:host(.mode-1) table td { border-bottom: 1px solid #ccc; }

:host(.mode-2) table th, 
:host(.mode-2) table td { border-bottom: 1px solid #ccc; }

:host(.mode-3) table th, 
:host(.mode-3) table td { border: none; }

.no-data, .loading { text-align: center; padding: 32px; color: #9ca3af; }

.user-cell { 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    min-width: 160px; 
}

.user-info { min-width: 0; }
.user-name { 
    font-weight: 500; 
    color: #111827; 
    margin: 0 0 1px 0; 
    font-size: 13px; 
    line-height: 1.2;
}
.user-email { 
    color: #6b7280; 
    font-size: 11px; 
    margin: 0; 
    line-height: 1.2; 
}

.report-cell { display: flex; gap: 8px; max-width: 280px; align-items: flex-start; }
.report-image { 
    width: 40px; 
    height: 30px; 
    border-radius: 4px; 
    object-fit: cover; 
    border: 1px solid #e5e7eb; 
    flex-shrink: 0; 
}
.report-details { min-width: 0; flex: 1; }
.report-type { 
    font-weight: 500;
    color: #111827; 
    margin: 0 0 2px 0; 
    font-size: 12px; 
    line-height: 1.2; 
}
.report-description { 
    color: #6b7280; 
    font-size: 11px; 
    margin: 0 0 3px 0; 
    line-height: 1.3; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
}
.report-location { 
    color: #9ca3af; 
    font-size: 10px; 
    display: flex; 
    align-items: center; 
    gap: 2px; 
    margin: 0; 
    line-height: 1.2; 
}

.status-badge { 
    display: inline-flex;
    align-items: center; 
    padding: 2px 6px; 
    border-radius: 10px; 
    font-size: 10px; 
    font-weight: 500; 
    text-transform: capitalize; 
}
.status-pending { background: #fef3c7; color: #92400e; }
.status-approved { background: #d1fae5; color: #065f46; }
.status-rejected { background: #fee2e2; color: #991b1b; }

.priority-badge { 
    display: inline-flex; 
    align-items: center; 
    padding: 2px 5px; 
    border-radius: 8px; 
    font-size: 9px; 
    font-weight: 500; 
    text-transform: capitalize;
}
.priority-high { background: #fee2e2; color: #991b1b; }
.priority-medium { background: #fef3c7; color: #92400e; }
.priority-low { background: #dbeafe; color: #1e40af; }

.action-menu { position: relative; display: inline-block; }

.menu-trigger {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    font-size: 24px;
    color: #ffae0b;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
     transform: rotate(90deg);
}

.menu-dropdown { 
    position: absolute; 
    top: 100%; right: 0; 
    background: white; 
    border: 1px solid #e5e7eb; 
    border-radius: 6px; 
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); 
    z-index: 1000; 
    min-width: 120px; 
    opacity: 0; 
    visibility: hidden; 
    transform: translateY(-8px); 
    transition: all 0.15s ease-out; 
}
.menu-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); }

.menu-item {
    display: flex; 
    align-items: center; 
    gap: 6px; 
    width: 100%;
    padding: 6px 10px; 
    text-align: left; 
    border: none; 
    background: none; 
    cursor: pointer; 
    font-size: 11px; 
    color: #374151; 
    transition: background-color 0.1s; 
    
}
.menu-item:hover { background: #f3f4f6; color: #111827; }
.menu-item.approve:hover { background: #f0fdf4; }
.menu-item.reject:hover { background: #fef2f2; }

.date-cell { font-size: 11px; color: #000; white-space: nowrap; }

.pagination { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: #f5f9fc; 
    color: #000; 
    font-size: 12px; 
    border-top: 1px solid #e5e7eb; 
}

.pagination-controls { display: flex; gap: 4px; }
.pagination-btn {
    background: #242526;
    border: 1px solid #131314ff;
    border-radius: 4px;
    padding: 4px 8px;
    color: #fbfbfb;
    cursor: pointer; 
    font-size: 11px; 
}
.pagination-btn:disabled { opacity: 0.5; cursor: not-allowed; }
`;
