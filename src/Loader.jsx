import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = "hidden";

        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Random increment for a more "natural" feel
                const increment = Math.floor(Math.random() * 5) + 1;
                return Math.min(100, prev + increment);
            });
        }, 50);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = "auto";
        };
    }, []);


    useGSAP(() => {
        if (progress === 100) {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onFinished) onFinished();
                },
            });

            tl.to(".loader-content", {
                opacity: 0,
                y: -40,
                duration: 0.8,
                ease: "power3.inOut",
                delay: 0.2
            })
                .to(".loader-container", {
                    yPercent: 100,
                    duration: 1.2,
                    ease: "power4.inOut",
                }, "-=0.4");
        }
    }, [progress, onFinished]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-brand">
                    <span className="brand-word">CHRI</span>
                    <span className="brand-word highlight">SHEN</span>
                </div>
                <div className="loader-bar-container">
                    <div className="loader-bar-track">
                        <div
                            className="loader-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="loader-info">
                        <span className="loader-status">Initializing Experience</span>
                        <span className="loader-number">{progress}%</span>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="loader-bg-glow"></div>
        </div>
    );
};

export default Loader;
