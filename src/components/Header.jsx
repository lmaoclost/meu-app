import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Meu App</h1>
      <nav>
        <ul>
          <li>
            <a href="">Início da página</a>
          </li>
          <li>
            <a href="">Fim da página</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
