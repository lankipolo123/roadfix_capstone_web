import { css } from 'lit';

export const textfieldStyles = css`
  .field {
    margin-bottom: 14px; /* tighter spacing */
  }
  
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 0.8rem; /* smaller label */
    color: #374151;
  }
  
  input {
    width: 100%;
    padding: 8px 12px; /* smaller padding */
    border: 1px solid #d1d5db;
    border-radius: 6px; /* less rounded */
    font-size: 0.875rem; /* ~14px */
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
  
  input.error {
    border-color: #ef4444;
  }
  
  .error-message {
    color: #ef4444;
    font-size: 0.75rem; /* smaller error text */
    margin-top: 3px;
  }
  
  .required {
    color: #ef4444;
  }
`;
