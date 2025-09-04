import { css } from 'lit';

export const LoginFormStyles = css`
  .auth-card {
    background: white;
    padding: 1.25rem; /* smaller padding */
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); /* lighter shadow */
    width: 100%;
    max-width: 300px; /* narrower card */
  }

  .form-header {
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .form-title {
    font-size: 1.125rem; /* ~18px */
    font-weight: 600;
    margin-bottom: 0.25rem;
    color:#ffae0b;
  }

  .form-subtitle {
    color:  #1f2937;
    font-size: 0.75rem; /* smaller subtitle */
  }

  .form-fields {
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-footer {
    margin-top: 0.75rem;
    text-align: center;
    font-size: 0.75rem;
  }

  .form-footer a {
    color: #2563eb;
    text-decoration: none;
  }

  .form-footer a:hover {
    text-decoration: underline;
  }
`;
