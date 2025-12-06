import React, { useRef, useEffect } from 'react';

const VideoComponent1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playback started successfully.");
          })
          .catch((error) => {
            console.error("Initial video autoplay prevented:", error);
          });
      }
    }
  }, []);

  const reloadVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video reloaded and playback started successfully.");
          })
          .catch((error) => {
            console.error("Video reload autoplay prevented:", error);
          });
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        loop
        playsInline
        autoPlay
        muted
        src="./assets/Eigthbackground.mp4"
        className="backgroundvideo"
      ></video>
      {/* Example button to trigger reloadVideo */}
      {/* <button onClick={reloadVideo}>Reload Video</button> */}
    </div>
  );
};

export default VideoComponent1;