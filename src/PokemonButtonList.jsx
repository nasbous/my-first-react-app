import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonButtonList = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        <button onClick={handlePrevious} disabled={pokemonIndex === 0}>
          Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={pokemonIndex === pokemonList.length - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PokemonButtonList;
