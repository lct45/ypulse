import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Sparkles, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">YP</div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-title">YPulse</span>
            <span className="sidebar-logo-subtitle">Brand Intelligence</span>
          </div>
        </div>
        <button className="sidebar-toggle" onClick={onToggle} aria-label="Toggle sidebar">
          <ChevronLeft size={18} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-title">Navigation</div>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-item-icon">
              <Home size={20} />
            </span>
            <span className="nav-item-text">Home</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">Analytics</div>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-item-icon">
              <LayoutDashboard size={20} />
            </span>
            <span className="nav-item-text">Brand Dashboard</span>
          </NavLink>
          <NavLink 
            to="/ai-analytics" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-item-icon">
              <Sparkles size={20} />
            </span>
            <span className="nav-item-text">AI Analytics</span>
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">YP</div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">YPulse</div>
            <div className="sidebar-user-role">Analytics User</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
