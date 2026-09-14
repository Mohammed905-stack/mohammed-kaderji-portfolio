import React, { useEffect, useRef } from 'react';

/**
 * Ultra-Smooth Precision Cyber-Dart Cursor
 * - Zero React re-renders during movement: uses direct DOM ref + requestAnimationFrame
 * - 120 FPS / 60 FPS hardware synchronization with translate3d
 * - Hover state changes toggle CSS classes directly on the element to avoid React render cycles
 * - Smooth CSS transitions for rotation and scaling without frame-drops
 * - Fully passive mouse listeners
 * - Safe auto-disable on touch devices
 */
export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device is a touch screen
    const isTouch = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let isHovered = false;
    let isVisible = false;
    let animFrameId: number;

    const container = containerRef.current;
    const dart = dartRef.current;
    if (!container || !dart) return;

    // Direct RAF tick for silky smooth hardware-accelerated movement
    const updatePosition = () => {
      container.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      animFrameId = requestAnimationFrame(updatePosition);
    };
    animFrameId = requestAnimationFrame(updatePosition);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        container.classList.remove('opacity-0');
        container.classList.add('opacity-100');
      }

      // Check if cursor is over interactive elements
      const target = e.target as HTMLElement | null;
      const hoverCheck = Boolean(
        target && target.closest('a, button, input, textarea, select, [role="button"], .interactive-element, label')
      );

      if (hoverCheck !== isHovered) {
        isHovered = hoverCheck;
        if (isHovered) {
          dart.classList.add('cursor-hovered');
        } else {
          dart.classList.remove('cursor-hovered');
        }
      }
    };

    const handleMouseDown = () => {
      dart.classList.add('cursor-clicked');
    };

    const handleMouseUp = () => {
      dart.classList.remove('cursor-clicked');
    };

    const handleMouseLeave = () => {
      isVisible = false;
      container.classList.remove('opacity-100');
      container.classList.add('opacity-0');
    };

    const handleMouseEnter = () => {
      isVisible = true;
      container.classList.remove('opacity-0');
      container.classList.add('opacity-100');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] opacity-0 will-change-transform transition-opacity duration-200"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
      aria-hidden="true"
    >
      <div
        ref={dartRef}
        className="cursor-dart relative origin-top-left transition-transform duration-150 ease-out"
      >
        {/* Soft cyan ion flare */}
        <div className="cursor-flare absolute top-0 left-0 w-6 h-6 -translate-x-2 -translate-y-2 rounded-full blur-md opacity-40 bg-cyan-500/25 pointer-events-none transition-all duration-200" />

        {/* Unique Cyber Dart SVG */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.55)]"
        >
          {/* Main Faceted Dart Body */}
          <path
            d="M2 2L9.5 20.5L13 13L20.5 9.5L2 2Z"
            fill="url(#dartGradientSmooth)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Internal Center Crease Ridge */}
          <path
            d="M2 2L13 13"
            stroke="#0891b2"
            strokeWidth="0.9"
            strokeLinecap="round"
            className="cursor-crease transition-colors duration-150"
          />

          {/* Precision Dot at exact apex tip (0, 0) */}
          <circle
            cx="2"
            cy="2"
            r="1.2"
            fill="#ffffff"
          />

          <defs>
            <linearGradient id="dartGradientSmooth" x1="2" y1="2" x2="20.5" y2="20.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B132B" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#06283D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic target bracket on hover */}
        <div className="cursor-bracket absolute -top-1 -left-1 w-6 h-6 border-t border-l border-cyan-300/80 rounded-tl-sm pointer-events-none opacity-0 transition-opacity duration-150" />
      </div>
    </div>
  );
};
