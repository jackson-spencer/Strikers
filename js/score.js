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

function clearCumulativeScore() {
	return CumulativeScore = [];
}

function knockDownPins(ballcount) {
	var max = 10;
	var min = 0;

	if (ballcount > 1) 
 	{
 	   	max = 10 - getCurrentRoll(); 	   	
 	}
	
	var randomScore = getRandom(min,max);
 	return randomScore;

 		  
}