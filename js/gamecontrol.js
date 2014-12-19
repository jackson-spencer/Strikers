

var ballcount = 1;
var bowlingframe = 1;
//var game = new Bowling.Game();
//var oframe;
//var rollScoreDisplay;

function advanceFrame() {
   
	if (bowlingframe < 11) { // keep playing we still have frames to go
 	     		//oframe = game.addFrame(bowlingframe);  		

 	      		var pinsdown = knockDownPins(ballcount);
 	      		setScore(pinsdown);

 	      		//rollScoreDisplay = oframe.recordRoll(ballcount,pinsdown);

 	      		if (pinsdown == 10) { //if we got a strike reset for next frame
 	      			ballcount = 1; 
 	      			bowlingframe += 1; 	      			
 	      		} else if (ballcount == 1) { //on first ball
 	      			ballcount += 1;
 	      		} else { //on second ball
 	      			bowlingframe += 1;
 	      			ballcount = 1; 	      			
 	      		}	
 	      		
 	      		if (bowlingframe == 11) { // then we are done, don't show the next frame and ball
 	      			document.getElementById('ballnumber').innerHTML = "done";
 	      	 		document.getElementById("framenum").innerHTML = "done";	
 	      		} else { //show the next frame and ball
 	      			document.getElementById('ballnumber').innerHTML = ballcount;
 	      	 		document.getElementById("framenum").innerHTML = bowlingframe;	
 	      		}
 	      		//show the scores
 	      	 	document.getElementById('pinResult').innerHTML = getCurrentRoll();
 			 	document.getElementById('TotalScore').innerHTML = getCumulativeScore();
 	      		
 	
	} else { //reset game, we have exceeded 10 frames
 	      		clearCumulativeScore();
 	      		bowlingframe = 1;
 	      		document.getElementById('ballnumber').innerHTML = "";
 	      	 	document.getElementById("framenum").innerHTML = "";
 	      	 	document.getElementById('pinResult').innerHTML = "";
 			 	document.getElementById('TotalScore').innerHTML = "";
	}
}
//send values to page
//get frame
//reset all
//get ball
//handle last frame
//handle a strike