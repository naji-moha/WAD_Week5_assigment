import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/todo"); // Redirect to the to-do list page
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Please Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        {/* 🔹 "Don't have an account?" link to Sign Up */}
        <p className="auth-toggle" onClick={() => navigate("/signup")}>
          Don't have an account? <span style={{ color: "#007bff", cursor: "pointer" }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
