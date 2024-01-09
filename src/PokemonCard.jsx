import PropTypes from 'prop-types';

function PokemonCard(props) {
    console.log(props);
    const { pokemon } = props;
    
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

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
      
      export default PokemonCard
