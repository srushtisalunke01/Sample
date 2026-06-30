import React from 'react';
import use3DTilt from '../hooks/use3DTilt';

/**
 * Reusable StatCard component with 3D tilt interaction.
 * @param {string} title - Card header title.
 * @param {string|number} value - Main statistical number.
 * @param {string} subtitle - Descriptive explanation text.
 * @param {React.ComponentType} icon - Lucide Icon component.
 */
export default function StatCard({ title, value, subtitle, icon: Icon }) {
  const { style, handleMouseMove, handleMouseLeave } = use3DTilt(8, 1.02);

  return (
    <div
      className="stat-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="stat-card-inner">
        <div className="stat-card-header">
          <span className="stat-card-title">{title}</span>
          {Icon && (
            <div className="stat-card-icon-container">
              <Icon className="stat-card-icon" size={20} />
            </div>
          )}
        </div>
        <div className="stat-card-body">
          <div className="stat-card-value">{value}</div>
          <div className="stat-card-subtitle">{subtitle}</div>
        </div>
        {/* Glow sheen background */}
        <div className="stat-card-sheen" />
      </div>
    </div>
  );
}
