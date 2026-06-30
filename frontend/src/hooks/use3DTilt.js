import { useState, useCallback } from 'react';

/**
 * Hook to apply an interactive 3D tilt effect on hover and mouse movement.
 * @param {number} maxRotation - Maximum rotation in degrees.
 * @param {number} scale - Scale factor on hover.
 */
export default function use3DTilt(maxRotation = 12, scale = 1.03) {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
  });

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized coordinates (-0.5 to 0.5)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    // Calculate tilt angles (negative Y because moving mouse down should tilt card forward)
    const rotateX = -normY * maxRotation;
    const rotateY = normX * maxRotation;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
      // Dynamic subtle shadow that shifts opposite to the tilt direction
      boxShadow: `
        ${-normX * 15}px ${-normY * 15}px 30px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(139, 92, 246, 0.15)
      `,
    });
  }, [maxRotation, scale]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
      boxShadow: 'none',
    });
  }, []);

  return {
    style,
    handleMouseMove,
    handleMouseLeave,
  };
}
