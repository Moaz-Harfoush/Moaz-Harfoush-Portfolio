import { useEffect } from "react";

const useScrollspy = (setActive) => {
  useEffect(() => {
    // Select all section elements on the page to monitor their visibility
    const sections = document.querySelectorAll("section");

    // Initialize IntersectionObserver to detect when sections enter the viewport boundary
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section occupies the defined active area, update the active state with its ID
          if (entry.isIntersecting) {
            setActive(entry.target.id.toUpperCase());
          }
        });
      },
      {
        /* rootMargin shrinks the detection window (-30% from top, -60% from bottom) 
           so the section triggers precisely when it's in the middle of the screen.
        */
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    // Start observing each section found on the DOM
    sections.forEach((section) => observer.observe(section));

    // Cleanup function to disconnect observers and prevent memory leaks when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActive]);
};

export default useScrollspy;
