import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./header.module.css";

export function Header() {
  const { contextUser } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <h1>Bem vindo </h1>
      <nav>
        <ul>
          <li>
            <a href="">{contextUser}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
