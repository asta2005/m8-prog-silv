import styles from './Top10Item.module.css';

export function Top10Item(props) {
    return (
        <li className={styles.book}>
            <div className={styles.number}>{props.number}</div>
            <div className={styles.bookInfo}>
                <h3>{props.title}</h3>
                <h4>by {props.author}</h4>
            </div>
        </li>
    );
}
