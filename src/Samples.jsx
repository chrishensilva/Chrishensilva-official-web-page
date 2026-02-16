import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './samples.css';
import pemHamuwa from './assets/Audio/Pem Hamuwa.mp3';
import premiye from './assets/Audio/Premiye.mp3';

const SampleItem = ({ title, artist, audioSrc, setGlobalIntensity }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Audio Context refs - using refs to persist across renders without re-initializing effectively
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);
    const animationFrameRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Initialize AudioContext on first play if needed
            if (!audioContextRef.current) {
                try {
                    // Need checking for window.AudioContext for cross-browser
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    audioContextRef.current = new AudioContext();

                    analyserRef.current = audioContextRef.current.createAnalyser();
                    analyserRef.current.fftSize = 256; // Smaller size for faster processing, we only need basic beat detection

                    // Connect audio element
                    sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
                    sourceRef.current.connect(analyserRef.current);
                    analyserRef.current.connect(audioContextRef.current.destination);
                } catch (e) {
                    console.error("Audio Context Error:", e);
                }
            }
            // Resume context if suspended (browser policy)
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }

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

    const handleWaveClick = (e) => {
        if (!duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (x / width) * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        // Automatically play if scrubbing
        if (!isPlaying) {
            // Initialize context if scrubbing triggers play
            if (!audioContextRef.current) {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    audioContextRef.current = new AudioContext();
                    analyserRef.current = audioContextRef.current.createAnalyser();
                    analyserRef.current.fftSize = 256;
                    sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
                    sourceRef.current.connect(analyserRef.current);
                    analyserRef.current.connect(audioContextRef.current.destination);
                } catch (e) {/* ignore */ }
            }
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }

            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Animation Loop for Beat Detection
    useEffect(() => {
        if (isPlaying && analyserRef.current) {
            const bufferLength = analyserRef.current.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const updateVisualizer = () => {
                analyserRef.current.getByteFrequencyData(dataArray);

                // Beat detection: Focus on the lowest frequencies (Kick/Bass)
                // With fftSize 256, bin 0-2 covers roughly 0-200Hz which contains the main kick energy
                let maxVolume = 0;
                const bassBins = 4;
                for (let i = 0; i < bassBins; i++) {
                    if (dataArray[i] > maxVolume) {
                        maxVolume = dataArray[i];
                    }
                }

                // Thresholding to create a "flicker" effect
                // Only react if volume is significant (kick drum hit)
                const threshold = 160;
                let intensity = 0;

                if (maxVolume > threshold) {
                    // Map the range [threshold, 255] to [0, 1]
                    intensity = (maxVolume - threshold) / (255 - threshold);
                    // Accentuate higher values for a sharper flash
                    intensity = Math.pow(intensity, 1.5);
                }

                setGlobalIntensity(intensity);

                animationFrameRef.current = requestAnimationFrame(updateVisualizer);
            };

            updateVisualizer();
        } else {
            // If paused, stop updating intensity
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            setGlobalIntensity(0); // Reset glow
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPlaying, setGlobalIntensity]);


    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            setGlobalIntensity(0);
        };

        if (audio) {
            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        // Cleanup AudioContext on unmount? 
        // Typically good practice, but if user navigates away, React handles unmount.
        // We should close context.
        return () => {
            if (audio) {
                audio.removeEventListener('ended', handleEnded);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        }
    }, [setGlobalIntensity]);


    // Generate a pseudo-random seed for bar heights to make each waveform look unique but static
    const barCount = 40;
    // Use useMemo to prevent the waveform from changing shape when state updates (e.g. playing/pausing)
    const bars = React.useMemo(() => Array.from({ length: barCount }, () => {
        // Determine a random height between 20% and 100%
        return Math.floor(Math.random() * (100 - 20 + 1) + 20);
    }), []);

    // Calculate progress as a percentage
    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className={`sample-card ${isPlaying ? 'playing' : ''}`}>
            {/* CrossOrigin attribute might be needed if audio was external, local is fine */}
            <audio ref={audioRef} src={audioSrc} crossOrigin="anonymous" />
            <div className="sample-header">
                <div className="sample-info">
                    <h3>{title}</h3>
                    <span className="sample-artist">{artist}</span>
                </div>
                <button
                    className="play-button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    <span className={`play-icon ${isPlaying ? 'pause' : ''}`}>
                        {isPlaying ? '❚❚' : '▶'}
                    </span>
                </button>
            </div>

            <div
                className="soundwave-visualizer interactive"
                onClick={handleWaveClick}
                title="Click to seek"
            >
                {bars.map((height, i) => {
                    // Check if this bar is "past" current time
                    // i / barCount gives the position from 0 to 1
                    const barPos = (i / barCount) * 100;
                    const isPlayed = barPos <= progressPercent;

                    return (
                        <div
                            key={i}
                            className={`wave-bar ${isPlayed ? 'played' : ''}`}
                            style={{
                                height: `${height}%`,
                                animationDelay: isPlaying ? `${i * 0.05}s` : '0s',
                                animationPlayState: isPlaying ? 'running' : 'paused'
                            }}
                        ></div>
                    );
                })}
            </div>
            <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
        </div>
    );
};

// Helper function to format seconds into MM:SS
const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Samples = () => {
    // State to hold current audio intensity (0.0 to 1.0)
    const [intensity, setIntensity] = useState(0);

    return (
        <div
            className="samples-page"
            style={{
                // Apply a dynamic box shadow or border glow based on intensity
                // Strobe effect: Sharp inset glow.
                // We accentuate the 'spread' and 'blur' dramatically on beat
                boxShadow: intensity > 0.1
                    ? `inset 0 0 ${50 + intensity * 150}px ${20 + intensity * 80}px rgba(139, 92, 246, ${intensity * 0.8})`
                    : 'none',
                // Remove transition or make it extremely fast for "flicker"
                transition: 'box-shadow 0.05s linear'
            }}
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

                <SampleItem
                    title="Pem Hamuwa"
                    artist="Chrishen Silva | Patalie Fernando"
                    audioSrc={pemHamuwa}
                    setGlobalIntensity={setIntensity}
                />
                <SampleItem
                    title="Premiye"
                    artist="Chrishen Silva   | Yasas Niwantha | Alice On Shrooms"
                    audioSrc={premiye}
                    setGlobalIntensity={setIntensity}
                />
            </div>
        </div>
    );
};

export default Samples;
