import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginFunction } from "../features/AuthenticSlice";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Import Navigate instead of Link

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const isLoggingIn = useSelector((store) => store.authenticity.isLoggedin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Password:", password);
    if (name.trim() || password.trim()) {
      dispatch(loginFunction());
    }
  };

  return (
    <>
      {isLoggingIn && <Navigate to="/home" replace />}

      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
