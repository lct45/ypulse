import { NavLink } from 'react-router-dom';
import { X, Home, LayoutDashboard, Sparkles } from 'lucide-react';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  return (
    <>
      {isOpen && (
        <div className="nav-drawer-overlay" onClick={onClose} />
      )}
      <aside className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="nav-drawer-header">
          <div className="nav-drawer-logo">
            <img src="/yp-icon.png" alt="YPulse" className="nav-drawer-logo-mark" />
            <div className="nav-drawer-logo-text">
              <span className="nav-drawer-logo-title">YPulse</span>
              <span className="nav-drawer-logo-subtitle">Brand Intelligence</span>
            </div>
          </div>
          <button className="nav-drawer-close" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="nav-drawer-nav">
          <div className="nav-drawer-section-title">Navigation</div>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-drawer-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <div className="nav-drawer-section-title">Analytics</div>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-drawer-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <LayoutDashboard size={20} />
            <span>Brand Dashboard</span>
          </NavLink>
          <NavLink
            to="/ai-analytics"
            className={({ isActive }) => `nav-drawer-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Sparkles size={20} />
            <span>AI Analytics</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}