import { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [input, setInput] = useState("venusaur");
  const [query, setQuery] = useState("venusaur");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        return fetch(data.species.url);
      })
      .then(res => res.json())
      .then(speciesData => {
        setSpecies(speciesData);
      })
      .catch(err => {
        setPokemon(null);
        setSpecies(null);
      });
  }, [query]);

  if (!pokemon || !species) {
    return <h2>Loading Pokémon...</h2>;
  }

  const pokemonTypes = pokemon.types.map(t => t.type.name);
  const flavorText =
    species.flavor_text_entries.find(e => e.language.name === 'en')?.flavor_text || '';

  const levelUpMoves = pokemon.moves.filter(move =>
    move.version_group_details.some(vgd =>
      vgd.move_learn_method.name === 'level-up'
    )
  );

  const movesToShow = showAll ? levelUpMoves : levelUpMoves.slice(0, 4);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input.toLowerCase());
    setShowAll(false);
  }

  return (
    <section className={styles.pokemon}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Search Pokémon"
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h2 className={styles.name}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className={styles.description}>{flavorText}</p>

      <div className={styles.types}>
        {pokemonTypes.map(type => (
          <span key={type} className={`${styles.type} ${styles[type]}`}>
            {type}
          </span>
        ))}
      </div>

      <h3 className={styles.movesTitle}>Level-Up Moves</h3>
      <ul className={styles.moves}>
        {movesToShow.map((move, i) => {
          const name = move.move.name;
          const isStab = pokemonTypes.some(t => name.includes(t));
          return (
            <li key={i} className={styles.move}>
              {name} {isStab && <strong className={styles.stab}>(STAB)</strong>}
            </li>
          );
        })}
      </ul>

      {levelUpMoves.length > 4 && (
        <button onClick={() => setShowAll(!showAll)} className={styles.toggle}>
          {showAll ? "Toon minder" : "Toon meer moves"}
        </button>
      )}
    </section>
  );
}
