import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./styles/MatrixHands.css";

const MatrixHands = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Floating animation for the image container
        gsap.to(containerRef.current, {
            y: 15,
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div className="matrix-hands-wrapper">
            <div className="matrix-hands-content" ref={containerRef}>
                <div style={{ position: "relative", width: "100%", maxWidth: "600px", display: "inline-block" }}>
                    <img src="/matrix_hands_pills.png" alt="Hands holding Matrix Pills" className="hands-image" />

                    {/* Clickable areas for the pills */}
                    <Link to="/developer" className="clickable-pill pill-red" aria-label="Developer Path" />
                    <Link to="/security" className="clickable-pill pill-blue" aria-label="Security Path" />
                </div>
            </div>
        </div>
    );
};

export default MatrixHands;
