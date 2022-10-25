import { Users } from "./components/Users";
import { useState } from "react";
import "./App.css";

export function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Users />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Ocultar" : "Ver"} lista
      </button>
    </>
  );
}
