import { useState } from "react";
import { getUsers } from "../../Api";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUsers().then((users) => {
      const foundUser = users.find((user) => user.username === username);
      if (foundUser) {
        setUser(foundUser);
        navigate("/profile");
        setError("");
      } else {
        setError("Please enter a valid Username");
      }
    });
  };
  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </main>
  );
};
