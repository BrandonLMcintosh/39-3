import React from "react";
import "./Pokedex.css";
import Pokecard from "../pokecard/Pokecard";
import defaultPokecards from "../pokecard/defaultPokecards";

const Pokedex = ({ pokemonList = defaultPokecards }) => {
	return (
		<div className="Pokedex">
			{pokemonList.map((pokemon) => {
				console.log(pokemon);
				return <Pokecard pokemon={pokemon} key={pokemon.id} />;
			})}
		</div>
	);
};

export default Pokedex;
