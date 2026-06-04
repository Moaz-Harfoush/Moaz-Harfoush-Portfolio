import React, { useMemo } from "react";

const SpaceStars = () => {
  // Generate 80 stars with random positions and sizes once to optimize performance
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      // Desynchronize the blinking animation for a more natural effect
      delay: `${Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse transform-gpu will-change-transform"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size * 1.5}px`,
            height: `${star.size * 1.5}px`,
            opacity: star.opacity,
            animationDuration: "3s",
            animationDelay: star.delay,
            // Add a glow effect only to larger stars to create depth
            boxShadow:
              star.size > 2 ? "0 0 6px rgba(255, 255, 255, 0.6)" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default SpaceStars;
