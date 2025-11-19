import { useEffect, useState } from 'react';

/**
 * Skip Link Component for Accessibility
 * This component provides a "skip to content" link that appears when users navigate with the keyboard
 * 
 * @param {string} href - The ID of the section to skip to (e.g., "#main-content")
 */
export default function SkipLink({ href = "#main-content" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Show the skip link when user presses Tab key
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href={href}
      className={`skip-link ${isVisible ? 'active' : ''}`}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </a>
  );
}
