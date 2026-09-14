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
      // Offset by -4px, -2px so that the SVG apex tip at (4, 2) aligns precisely with (mouseX, mouseY)
      container.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 2}px, 0)`;
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
        className="cursor-dart relative transition-transform duration-150 ease-out"
        style={{
          transformOrigin: '4px 2px',
        }}
      >
        {/* Soft cyan ion flare */}
        <div className="cursor-flare absolute top-0 left-0 w-6 h-6 -translate-x-1 -translate-y-1 rounded-full blur-md opacity-40 bg-cyan-400/30 pointer-events-none transition-all duration-200" />

        {/* Upright Custom Pointer SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_8px_rgba(0,229,255,0.6)]"
        >
          <path
            d="M4 2L11.5 21L14.5 13.5L22 10.5L4 2Z"
            fill="#00e5ff"
            stroke="#00b4d8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Dynamic target bracket on hover */}
        <div className="cursor-bracket absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-300/80 rounded-tl-sm pointer-events-none opacity-0 transition-opacity duration-150" />
      </div>
    </div>
  );
};
