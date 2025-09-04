// sidebar-styles.js
import { css } from 'lit';

export const sidebarStyles = css`
:host {
  --active-color: #ffae0b;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: var(--sidebar-width, 110px);
  transition: width 0.3s ease;
}

aside {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #43454C;
  overflow: hidden;
  width: 100%;
}

:host([collapsed]) {
  width: var(--sidebar-collapsed-width, 70px);
}

/* Logo */
.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.logo {
  max-width: 60px;
  height: auto;
  transition: max-width 0.3s ease;
}

:host([collapsed]) .logo {
  max-width: 36px;
}

/* Navigation */
nav {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

nav li {
  margin: 0.25rem 0;
  width: 100%;
}

nav a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  width: 100%;
  color: #fff;
  border-radius: 6px;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

/* Active link (icon + label) */
nav li.active a,
nav a.active {
  color: var(--active-color);
}

nav li.active a .material-symbols-outlined,
nav li.active a .label {
  color: var(--active-color);
}

nav a .label {
  font-size: 0.7rem;
  margin-top: 0.25rem;
  text-align: center;
}

:host([collapsed]) nav a .label {
  display: none;
}

/* Logout */
.logout {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem; /* moved up slightly from bottom */
  
}

.logout button {
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
  cursor: pointer;
  background: transparent;
   flex-direction: column; /* Add this */
}

:host([collapsed]) .logout .label {
  display: none;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  :host {
    width: var(--sidebar-collapsed-width, 70px);
  }

  nav a {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  nav a .label {
    display: none;
  }

  .logo-section .logo {
    max-width: 36px;
  }
}
`;
