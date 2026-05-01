import React, { useState, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay blocked or error:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/portfolio/magdy-shata.mp3" loop />
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-1"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
