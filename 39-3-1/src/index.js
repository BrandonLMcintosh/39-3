import React from "react";
import ReactDOM from "react-dom";
import { choice, remove } from "./helpers";
import foods from "./foods";

const App = () => {
	const randomFood = choice(foods);
	console.log(randomFood);
	return (
		<React.Fragment>
			<h2>I'd like one {randomFood}, please</h2>
			<h2>Here you go: {randomFood}</h2>
			<h2>Delicious! May I have another?</h2>
			{remove(foods, randomFood)}
			<h2>I'm sorry, we're all out. We have {foods.length}</h2>
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
