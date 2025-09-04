import { css } from 'lit';

export const dashboardLayoutStyles = css`
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.content {
  flex: 1;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  margin-left: var(--sidebar-width, 110px);
}

.layout.collapsed .content {
  margin-left: 70px;
}

/* Toggle button centered between sidebar and content */
.sidebar-toggle {
  position: absolute;
  top: 50%;
  left: var(--sidebar-width, 110px);
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0d0d0dff;
  background: #ffae0b;
  cursor: pointer;
  transition: left 0.3s ease;
}

.layout.collapsed .sidebar-toggle {
  left: 70px;
}

@media (max-width: 768px) {
  .content {
    margin-left: 70px;
  }
  .sidebar-toggle {
    left: 70px;
  }
}
`;
