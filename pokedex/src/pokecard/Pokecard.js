import React from "react";
import "./Pokecard.css";

const Pokecard = ({ pokemon }) => {
	const { id, name, type, base_experience } = pokemon;
	return (
		<div className="Pokecard">
			<h3 className="Pokecard-name">{name}</h3>
			<img
				className="Pokecard-image"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				alt={name}
			></img>
			<p className="Pokecard-type">Type: {type}</p>
			<p className="Pokecard-exp">EXP: {base_experience}</p>
		</div>
	);
};

export default Pokecard;
