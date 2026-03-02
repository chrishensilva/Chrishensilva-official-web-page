import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './samples.css';
import pemHamuwa from './assets/Audio/Pem Hamuwa.mp3';
import premiye from './assets/Audio/Premiye.mp3';

// Import generated covers
import pemCover from './assets/Images/pem_hamuwa.png';
import preCover from './assets/Images/premiye.png';

const SampleItem = ({ title, artist, audioSrc, coverImg, durationTime }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };

        if (audio) {
            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('ended', handleEnded);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        }
    }, []);

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className={`sample-card ${isPlaying ? 'playing' : ''}`}>
            <audio ref={audioRef} src={audioSrc} crossOrigin="anonymous" />

            <div className="card-content">
                <div className="song-thumbnail">
                    <img src={coverImg} alt={title} />
                </div>

                <div className="song-details">
                    <div className="song-main">
                        <h3>{title}</h3>
                        <p className="song-duration">Duration: {durationTime}</p>
                    </div>
                </div>

                <div className="action-area">
                    <button
                        className="play-btn-dilu"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        <span className={`icon-dilu ${isPlaying ? 'pause' : 'play'}`}></span>
                    </button>
                </div>
            </div>

            {/* Progress Bar at the absolute bottom of the card */}
            <div className="progress-container-dilu">
                <div
                    className="progress-bar-dilu"
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>

            {/* Hover/Active Glow Effect */}
            {isPlaying && <div className="card-glow"></div>}
        </div>
    );
};

const Samples = () => {
    return (
        <div
            className="samples-page"
        >
            <Helmet>
                <title>Samples | Chrishen Silva</title>
                <meta name="description" content="Listen to exclusive audio samples and tracks from Chrishen Silva." />
            </Helmet>

            <div className="navigation">
                <h2 className="nav-title">Chrishen</h2>
                <div className="nav-menu">
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/studio">Studio</a></li>
                    </ul>
                </div>
            </div>

            <div className="samples-container">
                <h1 className="samples-title">Original Audio Samples</h1>

                <div className="samples-grid">
                    <SampleItem
                        title="Pem Hamuwa"
                        durationTime="3:12"
                        audioSrc={pemHamuwa}
                        coverImg={pemCover}
                    />
                    <SampleItem
                        title="Premiye"
                        durationTime="4:53"
                        audioSrc={premiye}
                        coverImg={preCover}
                    />
                </div>
            </div>
        </div>
    );
};

export default Samples;
