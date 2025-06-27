import styles from './Top10.module.css';
import { Top10Item } from './Top10Item';

export function Top10() {
    return (
        <section className={styles.top10}>
            <h1>Top 10 Favorite Games</h1>
            <ol className={styles.book__list}>
                <Top10Item title="Dark Souls" author="Fromsoft" number="1" />
                <Top10Item title="God of War" author="Santa Monica Studio" number="2" />
                <Top10Item title="Elden Ring" author="Fromsoft" number="3" />
                <Top10Item title="Black Myth Wukong" author="Game Science" number="4" />
                <Top10Item title="Total WarHammer 3" author="Creative Assembly" number="5" />
                <Top10Item title="Doom" author="id Software" number="6" />
                <Top10Item title="Hollow Knight" author="Team Cherry" number="7" />
                <Top10Item title="League of Legends" author="Riot Games" number="8" />
                <Top10Item title="Monster Hunter Wild" author="Capcom" number="9" />
                <Top10Item title="Little Nightmares" author="Tarsier Studios" number="10" />
            </ol>
        </section>
    );
}
