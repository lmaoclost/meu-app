import { useState } from "react";

export function MeuForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Bem vindo ${userName}`);
    setUsername("");
    setPassword("");
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userName}
        onChange={handleUserNameChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Clique Aqui</button>
    </form>
  );
}
