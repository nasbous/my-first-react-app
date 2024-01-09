function PokemonCard({ pokemon }) {
    return (
      <figure className="card">
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            className="card-img"
          />
        ) : (
          <div>
            <p>????</p>
          </div>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  };
      
      export default PokemonCard
