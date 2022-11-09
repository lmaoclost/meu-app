import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { contextUser } = useContext(UserContext);
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Bem vindo {contextUser}</h3>
        <span>DH APP - Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
