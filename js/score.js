function getRandom(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScore(){
	return getRandom(1,10);
}