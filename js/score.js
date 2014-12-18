var CumulativeScore = [];

function getRandom(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setScore(score){
	
	CumulativeScore.push(score);
}

function getCurrentRoll(){
	
	return CumulativeScore[CumulativeScore.length - 1];

}

function getCumulativeScore() {
	return CumulativeScore;
}