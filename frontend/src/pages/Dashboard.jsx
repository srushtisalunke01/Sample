import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LogOut,
  Dna,
  Database,
  TrendingUp,
  Activity,
  User,
  Shield,
  Layers,
  Cpu,
  RefreshCw,
  GitBranch
} from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  // Task 2: Retrieve email from the navigation state, with a fallback
  const userEmail = location.state?.email || 'guest@futuremail.com';

  const handleLogout = () => {
    // Bonus Challenge: Navigate back to the Login page
    navigate('/');
  };

  // Task 4: Array of activity objects
  const recentActivities = [
    {
      id: 'act-1',
      email: userEmail,
      action: 'Authorized quantum alignment node',
      time: 'Just now'
    },
    {
      id: 'act-2',
      email: 'srushti@futuremail.com',
      action: 'Completed genome mapping #9842',
      time: '5 mins ago'
    },
    {
      id: 'act-3',
      email: 'sysop@futuremail.com',
      action: 'Initiated Level-3 node backup sequence',
      time: '24 mins ago'
    },
    {
      id: 'act-4',
      email: 'bio_ai_agent@futuremail.com',
      action: 'Discovered mutation match in Helix-7',
      time: '1 hour ago'
    },
    {
      id: 'act-5',
      email: 'developer@futuremail.com',
      action: 'Merged feature branch: synthetic-protein',
      time: '2 hours ago'
    }
  ];

  // Helper to generate DNA helix segments for 3D CSS helix animation
  const helixDots = Array.from({ length: 15 });

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Dna className="brand-logo-icon" size={28} />
          <span className="brand-logo-text">FutureDNA</span>
        </div>

        <nav className="sidebar-menu">
          <a href="#dashboard" className="menu-item active">
            <Layers size={18} />
            <span>Dashboard Node</span>
          </a>
          <a href="#sequences" className="menu-item">
            <Cpu size={18} />
            <span>Sequence Processor</span>
          </a>
          <a href="#network" className="menu-item">
            <GitBranch size={18} />
            <span>Gene Branches</span>
          </a>
          <a href="#security" className="menu-item">
            <Shield size={18} />
            <span>Quantum Shield</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <User size={16} />
            </div>
            <div className="user-info">
              <div className="user-name">Active Session</div>
              <div className="user-email-truncate" title={userEmail}>
                {userEmail}
              </div>
            </div>
          </div>

          {/* Bonus Challenge: Logout Button */}
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={16} />
            <span>Close Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-greeting">
            {/* Task 2: Personalized Welcome Message */}
            <h2 className="welcome-msg">
              Welcome Back, <span className="highlight-email">{userEmail}</span>!
            </h2>
            <p className="system-status">System Node: active-online | Host: port-8080</p>
          </div>
          <button className="refresh-status-btn" onClick={() => window.location.reload()}>
            <RefreshCw size={14} className="refresh-icon" />
            <span>Sync Network</span>
          </button>
        </header>

        {/* Task 3: Reusable Stat Cards Grid */}
        <section className="stats-grid">
          <StatCard
            title="Total Genome Sequences"
            value="148,829"
            subtitle="+24.5% synthesized this month"
            icon={Dna}
          />
          <StatCard
            title="Quantum Database Capacity"
            value="1.84 PB"
            subtitle="76.2% allocated to node grid"
            icon={Database}
          />
          <StatCard
            title="Synthesis Accuracy Rate"
            value="99.987%"
            subtitle="Within standard target threshold"
            icon={TrendingUp}
          />
        </section>

        {/* Dashboard Panels */}
        <section className="dashboard-panels">
          {/* Recent Activity List using .map() */}
          <div className="panel recent-activity-panel">
            <div className="panel-header">
              <Activity size={18} className="panel-header-icon" />
              <h3>Recent Grid Activities</h3>
            </div>
            <div className="panel-body">
              <div className="activity-list">
                {/* Task 4: Render activities array using map() with key */}
                {recentActivities.map((act) => (
                  <div key={act.id} className="activity-item">
                    <div className="activity-dot"></div>
                    <div className="activity-details">
                      <p className="activity-action">{act.action}</p>
                      <span className="activity-user">{act.email}</span>
                    </div>
                    <span className="activity-time">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attractive 3D Double Helix Render Panel */}
          <div className="panel helix-render-panel">
            <div className="panel-header">
              <Dna size={18} className="panel-header-icon helix-blue" />
              <h3>3D Double-Helix Simulation</h3>
            </div>
            <div className="panel-body DNA-render-container">
              <div className="dna-3d-scene">
                {helixDots.map((_, i) => (
                  <div
                    key={`dna-${i}`}
                    className="dna-base-pair"
                    style={{
                      '--delay': `${i * -0.2}s`,
                      '--y-pos': `${i * 12 - 90}px`
                    }}
                  >
                    <div className="dna-dot dot-left"></div>
                    <div className="dna-connector"></div>
                    <div className="dna-dot dot-right"></div>
                  </div>
                ))}
              </div>
              <div className="helix-stats">
                <span className="helix-stat-label">Model: Double Helix Beta-1</span>
                <span className="helix-stat-status animate-pulse">Running Simulation</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
