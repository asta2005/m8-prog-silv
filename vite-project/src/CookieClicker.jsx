import { useState } from 'react';
import styles from './CookieClicker.module.css';

export function CookieClicker() {
  const [score, setScore] = useState(0);
  const [grandmas, setGrandmas] = useState(0);

  const grandmaCost = Math.floor(20 * Math.pow(1.15, grandmas));

  function handleClick() {
    setScore(score + 1 + grandmas);
  }

  function buyGrandma() {
    if (score >= grandmaCost) {
      setGrandmas(grandmas + 1);
      setScore(score - grandmaCost);
    }
  }

  return (
    <section className={styles.cookieClicker}>
      <button className={styles.cookie} onClick={handleClick}></button>
      <div className={styles.container}>
        <div className={styles.score}>{score} Cookies</div>
        <div className={styles.upgradeContainer}>
          <label htmlFor="button">Grandmas: {grandmas}</label>
          <button className={styles.upgrade} onClick={buyGrandma}>
            Buy grandma ({grandmaCost} cookies)
          </button>
        </div>
      </div>
    </section>
  );
}
