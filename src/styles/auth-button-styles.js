import { css } from 'lit';

export const authButtonStyles = css`
  .auth-options {
    margin: 20px 0;
  }
  
  .remember-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .remember-me input {
    width: 16px;
    height: 16px;
  }
  
  .forgot-password {
    color: #3b82f6;
    text-decoration: none;
    font-size: 14px;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  /* Smaller submit button styles */
  .submit-btn {
    width: 100%;
    padding: 8px 12px; /* Reduced padding */
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px; /* Reduced font size */
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    margin-bottom: 20px;
  }

  .submit-btn:hover {
    background: #2563eb;
  }

  .submit-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  /* Smaller Google button styles */
  .google-btn {
    width: 100%;
    padding: 8px 12px; /* Reduced padding */
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px; /* Reduced font size */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;
  }

  .google-btn:hover {
    background: #f9fafb;
  }

  .google-icon {
    width: 20px;
    height: 20px;
  }
`;