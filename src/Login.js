import React, { useState, useEffect } from "react";

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (window.sessionStorage.getItem("Admin123"))
      window.location.href = "donorInfo";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "Admin123" && password === "admin123") {
      alert("Valid Credentials!!!");
      window.sessionStorage.setItem(username, password);
      window.location.href = "donorInfo";
    } else {
      alert("Invalid credentials!!!");
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
