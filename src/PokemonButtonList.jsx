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
      name: "mew",
    },
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);

  const handleButtonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(pokemonList[0])}>Bulbasaur</button>
      <button onClick={() => handleButtonClick(pokemonList[1])}>Mew</button>
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
};

export default PokemonButtonList;
