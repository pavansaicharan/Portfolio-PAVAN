import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger fade-in animations on scroll
 * @param {IntersectionObserverInit} options - Custom observer options
 * @returns {React.RefObject} Ref to attach to the target element
 */
export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return elementRef;
}
