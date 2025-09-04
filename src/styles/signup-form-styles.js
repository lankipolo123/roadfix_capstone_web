import { css } from 'lit';

export const SignupFormStyles = css`
  .auth-card {
    background: white;
    padding: 1.5rem; /* slightly more padding for extra fields */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* slightly deeper shadow */
    width: 100%;
    max-width: 400px; /* wider card for more fields */
  }

  .form-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .form-title {
    font-size: 1.25rem; /* ~20px */
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  .form-subtitle {
    color: #6b7280;
    font-size: 0.875rem; /* slightly bigger subtitle */
  }

  .form-fields {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr; /* two columns for wider forms */
    gap: 0.75rem;
  }

  /* Make single-column for smaller screens */
  @media (max-width: 500px) {
    .form-fields {
      grid-template-columns: 1fr;
    }
  }

  .form-footer {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.875rem;
  }

  .form-footer a {
    color: #2563eb;
    text-decoration: none;
  }

  .form-footer a:hover {
    text-decoration: underline;
  }
`;
