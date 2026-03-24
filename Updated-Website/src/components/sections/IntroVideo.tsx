import React from 'react';

export default function IntroVideo() {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/videos/1920sMotionGraphics_1.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}
