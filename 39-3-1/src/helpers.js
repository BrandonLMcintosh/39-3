const choice = (items) => {
	const randomChoiceIndex = Math.floor(Math.random() * items.length);
	console.log(randomChoiceIndex);
	return items[randomChoiceIndex];
};

const remove = (items, item) => {
	const itemIndex = items.findIndex((i) => i === item);
	items.splice(itemIndex, 1);
};

export { choice, remove };
