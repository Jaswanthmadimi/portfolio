import { Link } from "react-router-dom";
import "../App.css";

const SecurityPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#111", color: "#fff", fontFamily: "sans-serif" }}>
            <h1 style={{ color: "#ff3333", fontSize: "4rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "5px" }}>Security Path</h1>
            <p style={{ fontSize: "1.5rem", maxWidth: "600px", textAlign: "center", marginBottom: "2rem", opacity: 0.8 }}>
                You have chosen the red pill. Welcome to the world of security, penetration testing, and protecting the digital realm.
            </p>
            <Link to="/" style={{ padding: "12px 24px", backgroundColor: "#ff3333", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", transition: "transform 0.2s" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
                Return to Matrix
            </Link>
        </div>
    );
};

export default SecurityPage;
