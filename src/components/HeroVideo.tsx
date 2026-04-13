'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroVideo() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Randomly choose from Sequence-01 to Sequence-04
        const randomIndex = Math.floor(Math.random() * 4) + 1;
        const extension = (randomIndex === 2) ? 'm4v' : 'mp4';
        setVideoSrc(`/assets/Sequence-0${randomIndex}.${extension}`);
    }, []);

    // Seamless loop: intercept the video BEFORE it ends using timeupdate.
    // When within 0.2s of the end, we seek back to 0 while still playing —
    // the video never actually stops, eliminating any gap between loops.
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;
        if (video.duration - video.currentTime < 0.2) {
            video.currentTime = 0;
        }
    };

    return (
        <div className="hero-video-container">
            {videoSrc && (
                <video
                    ref={videoRef}
                    key={videoSrc}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            <div className="hero-overlay"></div>
        </div>
    );
}
