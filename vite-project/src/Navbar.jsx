// Navbar.jsx
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/games">Games</Link></li>
        <li><Link className={styles.link} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
