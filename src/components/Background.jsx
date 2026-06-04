import SpaceStars from "./BackgroundComponents/SpaceStars";

const Background = () => {
  return (
    // pointer-events-none prevents the background from blocking clicks on foreground elements
    <div className="fixed inset-0 top-5 w-full h-full overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-screen transform-gpu will-change-transform">
        <img
          src="/images/background.webp"
          alt="Developer Silhouette Background"
          className="w-full max-w-2xl h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Radial gradient creates a dark vignette effect that fades out from the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.8)_80%)]" />

      <SpaceStars />
    </div>
  );
};

export default Background;
