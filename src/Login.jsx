import { useState } from "react";

function LoginForm() {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function that runs when form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // stops page refresh
    alert(`Username: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // updates state as you type
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // updates state as you type
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
