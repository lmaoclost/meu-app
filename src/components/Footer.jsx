import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { userName } = useContext(UserContext);

  return (
    <footer class={styles.footer}>
      <div>
        <h3>Bem vindo {userName}</h3>
        <span>DH APP - Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
