import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const DeveloperPage = () => {
    const [bootSequence, setBootSequence] = useState(0);
    const [showArchitecture, setShowArchitecture] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setBootSequence(1), 600);
        const timer2 = setTimeout(() => setBootSequence(2), 1200);
        const timer3 = setTimeout(() => setBootSequence(3), 1800);
        const timer4 = setTimeout(() => setBootSequence(4), 2400);
        const timer5 = setTimeout(() => setBootSequence(5), 3000);
        const timer6 = setTimeout(() => setBootSequence(6), 3600);

        return () => {
            clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3);
            clearTimeout(timer4); clearTimeout(timer5); clearTimeout(timer6);
        };
    }, []);

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#0a0a0a", color: "#00ff41", fontFamily: "'Fira Code', 'Courier New', Courier, monospace", padding: "4rem 2rem" }}>

            <div style={{ maxWidth: "900px", width: "100%", position: "relative" }}>

                {/* Hero / Boot Sequence */}
                <div style={{ position: "relative", overflow: "hidden", marginBottom: "3rem" }}>

                    {/* CRT Scanline Effect */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 2px, 3px 100%", zIndex: 1, pointerEvents: "none" }}></div>

                    <div style={{ position: "relative", zIndex: 10, padding: "2rem 0" }}>
                        <h1 style={{ color: "#00ff41", fontSize: "2.5rem", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "2px", textShadow: "0 0 10px rgba(0, 255, 65, 0.5)", borderBottom: "1px solid #00ff41", paddingBottom: "1rem" }}>
                            BLUE PILL - Developer Mode
                        </h1>

                        <div style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "2rem", minHeight: "220px" }}>
                            <div style={{ opacity: bootSequence >= 0 ? 1 : 0, transition: "opacity 0.3s" }}>&gt; Initializing System...</div>
                            <div style={{ opacity: bootSequence >= 1 ? 1 : 0, transition: "opacity 0.3s" }}>&gt; Loading Developer Profile...</div>
                            <div style={{ opacity: bootSequence >= 2 ? 1 : 0, transition: "opacity 0.3s" }}>&gt; Verifying Skills... ✔</div>
                            <div style={{ opacity: bootSequence >= 3 ? 1 : 0, transition: "opacity 0.3s", color: "#ff3333" }}>&gt; Security Layer Enabled... 🔐</div>
                            <div style={{ opacity: bootSequence >= 4 ? 1 : 0, transition: "opacity 0.3s", color: "#3388ff", textShadow: "0 0 8px rgba(51, 136, 255, 0.6)", marginTop: "1rem", fontWeight: "bold" }}>
                                &gt; Status: READY
                            </div>

                            <div style={{ opacity: bootSequence >= 5 ? 1 : 0, transition: "opacity 0.5s", marginTop: "2rem", borderLeft: "3px solid #00ff41", paddingLeft: "1rem" }}>
                                <p style={{ color: "#fff", textShadow: "0 0 5px rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Life is short, so I use Python 🐍</p>
                                <p style={{ color: "#aaa" }}>I don’t just write code — I build secure, scalable, real-world systems.</p>
                            </div>
                        </div>

                        {/* Interactive Buttons */}
                        <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "2rem" }}>
                            <a href="#projects" style={{ padding: "12px 24px", backgroundColor: "#00ff41", color: "#000", textDecoration: "none", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", boxShadow: "0 0 15px rgba(0, 255, 65, 0.4)", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
                                [ View Projects ]
                            </a>
                            <button onClick={() => setShowArchitecture(true)} style={{ padding: "12px 24px", backgroundColor: "transparent", color: "#00ff41", border: "1px solid #00ff41", borderRadius: "0", cursor: "pointer", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "rgba(0, 255, 65, 0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                [ View Architecture Approach ]
                            </button>
                        </div>
                    </div>
                </div>

                {/* Core Philosophy Block */}
                <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginBottom: "3rem" }}>
                    <div style={{ padding: "2rem 0" }}>
                        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "1.5rem", borderBottom: "1px dashed rgba(255, 255, 255, 0.2)", paddingBottom: "0.5rem" }}>⚡ My Engineering Principles</h2>
                        <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem", lineHeight: "2", color: "#aaa" }}>
                            <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "#00ff41", marginRight: "10px" }}>▹</span>Write clean, maintainable code.</li>
                            <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "#00ff41", marginRight: "10px" }}>▹</span>Build APIs that scale.</li>
                            <li style={{ marginBottom: "0.5rem" }}><span style={{ color: "#00ff41", marginRight: "10px" }}>▹</span>Design with security first.</li>
                            <li><span style={{ color: "#00ff41", marginRight: "10px" }}>▹</span>Solve problems, not just assignments.</li>
                        </ul>
                    </div>
                </div>

                {/* Tech Identity Section */}
                <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", marginBottom: "3rem" }}>
                    <h2 style={{ fontSize: "2rem", color: "#00ff41", marginBottom: "1.5rem", textAlign: "center", textTransform: "uppercase", letterSpacing: "2px" }}>Tech Identity</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        <div style={{ padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", textAlign: "center" }}>
                            <h3 style={{ color: "#3388ff", marginBottom: "1rem", fontSize: "1.3rem" }}>🛠 Backend</h3>
                            <p style={{ color: "#aaa", lineHeight: "1.6" }}>Python &bull; Flask &bull; REST APIs &bull; SQLite</p>
                        </div>
                        <div style={{ padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", textAlign: "center" }}>
                            <h3 style={{ color: "#ff3333", marginBottom: "1rem", fontSize: "1.3rem" }}>🎨 Frontend</h3>
                            <p style={{ color: "#aaa", lineHeight: "1.6" }}>React.js &bull; Responsive UI &bull; API Integration</p>
                        </div>
                        <div style={{ padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", textAlign: "center" }}>
                            <h3 style={{ color: "#ffcc00", marginBottom: "1rem", fontSize: "1.3rem" }}>☁ Deployment</h3>
                            <p style={{ color: "#aaa", lineHeight: "1.6" }}>AWS &bull; GitHub &bull; Version Control</p>
                        </div>
                    </div>
                </div>

                {/* Proof of Work Section */}
                <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", padding: "3rem 0", marginBottom: "3rem", borderTop: "1px dashed rgba(51, 136, 255, 0.3)", borderBottom: "1px dashed rgba(51, 136, 255, 0.3)" }}>
                    <h2 style={{ fontSize: "1.8rem", color: "#3388ff", marginBottom: "2rem", textAlign: "center" }}>📊 Proof of Work</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
                        <div>
                            <div style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>10+</div>
                            <div style={{ color: "#aaa", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Projects Built</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>5+</div>
                            <div style={{ color: "#aaa", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>APIs Developed</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>15+</div>
                            <div style={{ color: "#aaa", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Security Tools Practiced</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>∞</div>
                            <div style={{ color: "#aaa", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Continuous Learning</div>
                        </div>
                    </div>
                </div>

                {/* Security-First Tag */}
                <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{ display: "inline-block", padding: "1rem 2rem", background: "linear-gradient(45deg, rgba(255, 51, 51, 0.1), rgba(0, 255, 65, 0.1))", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "50px", boxShadow: "0 0 20px rgba(0,0,0,0.5)" }}>
                        <span style={{ color: "#aaa", fontSize: "1.1rem" }}>Developer by passion. </span>
                        <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>Security engineer by mindset. 🔥</span>
                    </div>
                </div>

                {/* Modal for Architecture Approach */}
                {showArchitecture && (
                    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
                        <div style={{ width: "100%", maxWidth: "800px", backgroundColor: "#111", border: "1px solid #00ff41", borderRadius: "8px", padding: "2rem", position: "relative", boxShadow: "0 0 30px rgba(0,255,65,0.2)" }}>
                            <button onClick={() => setShowArchitecture(false)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "transparent", color: "#00ff41", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
                            <h2 style={{ color: "#00ff41", marginBottom: "1.5rem", borderBottom: "1px solid #333", paddingBottom: "1rem" }}>⚙️ Architecture & Design Flow</h2>

                            <div style={{ display: "grid", gap: "1.5rem", color: "#aaa" }}>
                                <div><strong style={{ color: "#fff" }}>1. Requirement Analysis:</strong> Define the core problem before writing a single line of code.</div>
                                <div><strong style={{ color: "#fff" }}>2. API Structure (Backend):</strong> Design scalable REST endpoints using Flask/FastAPI. Establish clear routes, request validation, and response formatting.</div>
                                <div><strong style={{ color: "#fff" }}>3. Data & Security:</strong> Model databases (SQLite/PostgreSQL) and implement immediate security layers (JWT authentication, input sanitization, rate limiting).</div>
                                <div><strong style={{ color: "#fff" }}>4. UI Integration (Frontend):</strong> Build responsive React components that cleanly consume the backend APIs with proper error handling and state management.</div>
                                <div><strong style={{ color: "#fff" }}>5. Deployment Model:</strong> Containerize (typically Docker) or push to cloud providers (AWS EC2 / Vercel), ensuring CI/CD pipelines are intact for future updates.</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Refactored Projects Section */}
                <div id="projects" style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", marginBottom: "4rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2 style={{ fontSize: "2.5rem", color: "#fff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>
                            ⚙️ Built with Purpose.<br />
                            <span style={{ color: "#3388ff" }}>📈 Designed for Scale.</span><br />
                            <span style={{ color: "#ff3333" }}>🔐 Engineered for Security.</span>
                        </h2>
                        <p style={{ color: "#aaa", fontSize: "1.1rem" }}>A showcase of systems designed to solve real problems.</p>
                    </div>

                    <div style={{ display: "grid", gap: "3rem" }}>
                        {/* Project 1 */}
                        <div style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                            <h3 style={{ fontSize: "1.8rem", color: "#00ff41", marginBottom: "1rem" }}>Keylogger Detection Utility</h3>
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                                <span style={{ padding: "4px 8px", backgroundColor: "rgba(0, 255, 65, 0.1)", color: "#00ff41", fontSize: "0.8rem", borderRadius: "4px" }}>Python</span>
                                <span style={{ padding: "4px 8px", backgroundColor: "rgba(255, 51, 51, 0.1)", color: "#ff3333", fontSize: "0.8rem", borderRadius: "4px" }}>System Security</span>
                            </div>
                            <div style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.6" }}>
                                <p><strong style={{ color: "#fff" }}>Problem Statement:</strong> Unauthorized local surveillance software remains undetected by basic antivirus.</p>
                                <p><strong style={{ color: "#fff" }}>Architecture Used:</strong> Python script utilizing `psutil` to analyze running processes in real-time, cross-referencing against known malicious signatures and behavioral patterns.</p>
                                <p><strong style={{ color: "#fff" }}>Security Measures:</strong> Elevated privilege execution, tamper-evident logging, and automated threat termination capabilities.</p>
                                <p><strong style={{ color: "#fff" }}>Deployment Status:</strong> Active local utility / Open Source CLI.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                            <h3 style={{ fontSize: "1.8rem", color: "#3388ff", marginBottom: "1rem" }}>Scalable REST API Platform</h3>
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                                <span style={{ padding: "4px 8px", backgroundColor: "rgba(51, 136, 255, 0.1)", color: "#3388ff", fontSize: "0.8rem", borderRadius: "4px" }}>Flask</span>
                                <span style={{ padding: "4px 8px", backgroundColor: "rgba(255, 204, 0, 0.1)", color: "#ffcc00", fontSize: "0.8rem", borderRadius: "4px" }}>AWS EC2</span>
                            </div>
                            <div style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.6" }}>
                                <p><strong style={{ color: "#fff" }}>Problem Statement:</strong> Monolithic backends fail under high concurrent loads and lack standardized data exposure.</p>
                                <p><strong style={{ color: "#fff" }}>Architecture Used:</strong> Flask Blueprint architecture decoupling auth, user tracking, and data processing. Connected to a structured relational SQLite database.</p>
                                <p><strong style={{ color: "#fff" }}>Security Measures:</strong> JWT token-based authentication, bcrypt password hashing, and CORS strict policies.</p>
                                <p><strong style={{ color: "#fff" }}>Deployment Status:</strong> Live on AWS EC2 instance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Elite Switch */}
                <div style={{ opacity: bootSequence >= 6 ? 1 : 0, transition: "opacity 1s", textAlign: "center", padding: "3rem 0", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <p style={{ color: "#aaa", fontSize: "1.2rem", marginBottom: "1rem", fontStyle: "italic" }}>&gt; Still exploring?</p>
                    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/security" style={{ display: "inline-block", padding: "12px 30px", backgroundColor: "rgba(255, 51, 51, 0.1)", color: "#ff3333", border: "1px solid #ff3333", textDecoration: "none", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold", transition: "all 0.3s", boxShadow: "0 0 15px rgba(255, 51, 51, 0.2)" }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ff3333"; e.currentTarget.style.color = "#fff"; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 51, 51, 0.1)"; e.currentTarget.style.color = "#ff3333"; }}>
                            Switch to Red Pill (Security Mode)
                        </Link>
                        <Link to="/" style={{ display: "inline-block", padding: "12px 30px", backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#fff", border: "1px solid #fff", textDecoration: "none", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold", transition: "all 0.3s" }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#000"; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"; e.currentTarget.style.color = "#fff"; }}>
                            [ Disconnect & Return to Matrix ]
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeveloperPage;
