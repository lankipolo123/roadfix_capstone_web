import { LitElement, html, css } from 'lit';
import '../commons/avatar-icons.js'; // user-avatar

export class ProfileHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      display: flex;
      position: relative;
      background: #fff;
      border-radius: 12px;
      border: 1.2px solid #adadadff;
      min-height: 100px;
      overflow: hidden;
    }

    /* Left colored bar stretches full height */
    .left-bar {
      width: 32px;
      background-color: #43454C;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      align-self: stretch; /* makes it stretch full height of flex container */
      flex-shrink: 0;
    }

    .content {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      padding: 16px;
    }

    .avatar-container {
      position: relative;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }

    user-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .camera-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 2px solid #000;
      font-family: 'Material Symbols Outlined';
      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      color: black;
      font-size: 18px;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .name {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .role,
    .joined-date {
      font-size: 0.9rem;
      color: gray;
    }

    .status {
      font-size: 0.75rem;
      color: #28a745;
    }

    /* Verified badge on the right */
    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background-color: #007bff;
      color: white;
      font-size: 0.75rem;
      padding: 2px 6px;
      border-radius: 4px;
      z-index: 1;
    }
  `;

  render() {
    return html`
      <div class="profile-card">
        <div class="left-bar"></div>
        <div class="content">
          <div class="avatar-container">
            <user-avatar size="80"></user-avatar>
            <div class="camera-icon" @click=${this.changeAvatar}>add_photo_alternate</div>
          </div>
          <div class="info">
            <div class="name">John Doe</div>
            <div class="role">Roadfix Admin</div>
    
            <div class="joined-date">Joined: Jan 1, 2022</div>
          </div>
        </div>
        <div class="badge">Verified</div>
      </div>
    `;
  }

  changeAvatar() {
    alert('Change avatar clicked');
  }
}

customElements.define('profile-header', ProfileHeader);
