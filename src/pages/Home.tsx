import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Sparkles, TrendingUp, Globe, Users } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-new">
      <header className="home-header">
        <h1 className="home-header-title">YPulse Analytics Portal</h1>
        <div className="home-header-actions">
          <div className="header-icon-placeholder"></div>
          <div className="header-icon-placeholder"></div>
          <div className="header-icon-placeholder"></div>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Youth Brand<br />Intelligence
          </h1>
          <p className="home-hero-subtitle">
            Track how any brand is performing among young consumers with real-time sentiment, loyalty, and purchase data
          </p>
        </div>
      </section>

      <section className="home-stats-section">
        <div className="home-stat-card">
          <div className="home-stat-icon-wrapper">
            <TrendingUp size={28} />
          </div>
          <div className="home-stat-content">
            <span className="home-stat-value">1,200+</span>
            <span className="home-stat-label">Brands Tracked</span>
          </div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-icon-wrapper">
            <Users size={28} />
          </div>
          <div className="home-stat-content">
            <span className="home-stat-value">50M+</span>
            <span className="home-stat-label">Survey Responses</span>
          </div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-icon-wrapper">
            <Globe size={28} />
          </div>
          <div className="home-stat-content">
            <span className="home-stat-value">25+</span>
            <span className="home-stat-label">Countries</span>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Get Started</h2>
        <div className="home-cards-row">
          <button className="home-card" onClick={() => navigate('/dashboard')}>
            <div className="home-card-icon">
              <LayoutDashboard size={24} color="white" />
            </div>
            <div className="home-card-content">
              <h3>Brand Dashboard</h3>
              <p>Explore brand performance, sentiment, loyalty, and purchase intent among young consumers</p>
            </div>
          </button>
          <button className="home-card" onClick={() => navigate('/ai-analytics')}>
            <div className="home-card-icon">
              <Sparkles size={24} color="white" />
            </div>
            <div className="home-card-content">
              <h3>AI Analytics</h3>
              <p>Ask questions in natural language about brands, trends, and demographic breakdowns</p>
            </div>
          </button>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Capabilities</h2>
        <div className="home-cards-row-three">
          <div className="home-card-small">
            <div className="home-card-icon">
              <TrendingUp size={24} color="white" />
            </div>
            <div className="home-card-content">
              <h3>Brand Tracking</h3>
              <p>Monitor brand health metrics — awareness, favorability, loyalty, and purchase intent — over time and across demographics.</p>
            </div>
          </div>
          <div className="home-card-small">
            <div className="home-card-icon">
              <Sparkles size={24} color="white" />
            </div>
            <div className="home-card-content">
              <h3>AI-Powered Insights</h3>
              <p>Ask questions like "Which brands are trending with Gen Z?" or "Show me purchase intent by region" and get instant answers.</p>
            </div>
          </div>
          <div className="home-card-small">
            <div className="home-card-icon">
              <Users size={24} color="white" />
            </div>
            <div className="home-card-content">
              <h3>Demographic Analysis</h3>
              <p>Segment brand data by age, gender, ethnicity, geography, and more to understand what resonates with specific audiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
