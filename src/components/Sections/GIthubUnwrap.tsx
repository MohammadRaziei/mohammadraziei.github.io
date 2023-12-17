import React, {FC, memo, useEffect, useRef, useState} from 'react';

const speakerColor = '#444';

const UnmuteIcon: FC = props => (
  <svg
    fill={speakerColor}
    version="1.1"
    viewBox="0 0 246.8 246.8"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M123.4,0C55.2,0,0,55.2,0,123.4s55.2,123.4,123.4,123.4h0c68.1,0,123.4-55.2,123.4-123.4S191.5,0,123.4,0z
	 M58.6,157c0,0.2-0.2,0.4-0.4,0.4H35.5c-2.2,0-3.9-1.8-3.9-4.1v-60c0-2.3,1.8-4.1,3.9-4.1h22.7c0.2,0,0.4,0.2,0.4,0.4V157z
	 M131.7,200.6c0,0.1,0,0.2-0.1,0.4c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1-0.1,0.1-0.2,0.2
	c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0-0.2,0.1c0,0-0.1,0-0.1,0
	c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.3-0.2L63.8,158
	c-0.4-0.3-0.6-0.7-0.6-1.2l0-66.8c0-0.5,0.2-0.9,0.6-1.2L129.5,45c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3-0.1
	c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1
	c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,0.1,0.2,0.1,0.3
	c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.1,0.4L131.7,200.6z M163.8,179.6c-0.5,0.4-1.1,0.4-1.5-0.1l-9.4-9.4c-0.7-0.7-0.7-1.3,0-2
	c24.3-25.3,23.2-65.1-1.6-89.5c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c0-0.1,0-0.2-0.1-0.3
	c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3s0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.2c0-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0l9.2-9.2
	c0,0,0,0,0,0c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0.1
	c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0,0,0c15,15.1,22.9,33.2,23.8,54.2
	c0.9,21.2-7.2,41.7-21.7,57.2C164.4,179.1,164.1,179.3,163.8,179.6z M183.3,199.7C183.3,199.7,183.3,199.7,183.3,199.7
	c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0
	c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.2-0.1c0,0,0,0,0,0L171,189.4c-0.5-0.5-0.5-1.4,0-1.9
	c13.6-14,22.4-32.1,24.9-51.8c3.7-28.6-6.3-56-26.6-76.4c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2
	c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.2
	c0,0,0,0,0,0L179.7,47c0.5-0.5,1.4-0.5,1.9,0C224.2,88.9,224.8,157.2,183.3,199.7z"
    />
  </svg>
);

const MuteIcon: FC = props => (
  <svg
    fill={speakerColor}
    version="1.1"
    viewBox="0 0 246.8 246.8"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M123.4,0C55.2,0,0,55.2,0,123.4s55.2,123.4,123.4,123.4s123.4-55.2,123.4-123.4S191.6,0,123.4,0z
	 M58.3,157.5l-23.8-0.1c-1.6,0-2.9-1.3-2.9-2.9c-0.1-21.3-0.1-41.9,0-61.6c0-0.7,0.1-1.4,0.3-2c0.3-1,1-1.4,2-1.5
	c8.8-0.1,16.9-0.1,24.1-0.1c0.3,0,0.6,0.3,0.6,0.6l0,67.1C58.7,157.3,58.5,157.5,58.3,157.5z M131.7,200.7c0,0.1,0,0.2-0.1,0.4
	c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.2-0.2,0.3-0.4,0.4c0,0,0,0,0,0c-0.1,0.1-0.3,0.2-0.5,0.2
	c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.2,0-0.3-0.1-0.4-0.2L63.8,158c-0.4-0.3-0.6-0.7-0.6-1.1
	V89.9c0-0.5,0.2-0.9,0.6-1.1L129.6,45c0.1-0.1,0.3-0.1,0.4-0.2c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0
	c0.2,0,0.3,0.1,0.5,0.2c0,0,0,0,0,0c0.2,0.1,0.3,0.2,0.4,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1
	c0,0.1,0.1,0.2,0.1,0.4V200.7z M226.9,148.5C226.9,148.5,226.9,148.5,226.9,148.5L211.5,164c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1
	c0,0-0.1,0.1-0.1,0.1s-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0l-24.3-24.3c0,0-0.1,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1
	c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0.1l-24.2,24.2c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1-0.1
	c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0l-15.5-15.5c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1
	c0,0,0,0,0,0l24.2-24.2c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1l-24.2-24.2c0,0,0,0,0,0
	c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0,0l15.5-15.5c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1
	c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0l24.2,24.2c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1
	c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1l24.3-24.3c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0.1
	c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0l15.5,15.5c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1s0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1
	c0,0,0,0,0,0l-24.3,24.3c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1l24.3,24.3c0,0,0,0,0,0
	c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1-0.1,0.1C227,148.4,227,148.5,226.9,148.5z"
    />
  </svg>
);

const GithubUnwrap: FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleVideoClickBtn = () => {
    const videoPlayer = videoRef.current;
    if (videoPlayer) {
      videoPlayer.muted = !videoPlayer.muted;
      setMuted(videoPlayer.muted);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current
              .play()
              .then(() => {})
              .catch(error => {
                console.error('Error playing video:', error);
              });
          } else {
            videoRef.current.pause();
          }
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75, // Adjust this threshold to your preference
    };

    if (videoRef.current) {
      observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer && videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            console.log('Hello Video');
          })
          .catch(error => {
            console.error('Error playing video:', error);
          });
      } else {
        handleVideoClickBtn();
      }
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <video
        autoPlay
        className="absolute z-0 h-full w-full object-contain"
        loop
        muted
        onClick={handleVideoClick}
        onDoubleClick={() => {
          window.location.href = 'https://github.com/mohammadraziei/';
        }}
        ref={videoRef}>
        <source src="/static/assets/downloaded/unwrapped-MohammadRaziei.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-2 left-2 z-10">
        <button onClick={handleVideoClickBtn}>{muted ? <MuteIcon /> : <UnmuteIcon />}</button>
      </div>
    </div>
  );
});

GithubUnwrap.displayName = 'GithubUnwrap';
export default GithubUnwrap;
