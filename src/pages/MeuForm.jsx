import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function MeuForm() {
  const [userName, setUsername] = useState("");
  const { setContextUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContextUser(userName);
    setUsername("");
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
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
      <button type="submit">Clique Aqui</button>
    </form>
  );
}
