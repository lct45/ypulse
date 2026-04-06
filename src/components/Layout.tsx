import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import ChatBot from './ChatBot';
import { Menu } from 'lucide-react';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app-layout">
      <header className="app-topbar">
        <div className="app-topbar-left">
          <img src="/yp-icon.png" alt="YPulse" className="app-topbar-logo" />
          <span className="app-topbar-title">YPulse Analytics Portal</span>
        </div>
        <button className="app-topbar-menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>
      <div className="main-wrapper">
        <Outlet context={{ onMenuOpen: () => setDrawerOpen(true) }} />
      </div>
      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <ChatBot />
    </div>
  );
}