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

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // 'ended' fires when the video genuinely stops — seek back and replay.
        // This is the most reliable cross-browser looping fallback.
        const handleEnded = () => {
            video.currentTime = 0;
            video.play().catch(() => {});
        };

        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
    }, [videoSrc]);

    return (
        <div className="hero-video-container">
            {videoSrc && (
                <video
                    ref={videoRef}
                    key={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            <div className="hero-overlay"></div>
        </div>
    );
}
