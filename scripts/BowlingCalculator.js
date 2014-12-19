// Bowling namespace
var Bowling = Bowling || {};



// Calculator constructor
Bowling.Calculator = function(){

}

// Calculator Calculate method
Bowling.Calculator.prototype.Calculate = function () {
    alert("Calculate");
}



// Frame constructor
Bowling.Frame = function (num) {

    this.frameNumber = num;
    this.rollPins_1 = 0;
    this.rollPins_2 = 0;
    this.rollPins_3 = 0;
    this.total = 0;
};

Bowling.Frame.prototype.recordRoll = function(rollNum, pins){

    var rollDisplay = "";

    switch (rollNum) {
        case 1:
            this.rollPins_1 = pins;
            break;
        case 2:
            this.rollPins_2 = pins;
            break;
        case 3:
            this.rollPins_3 = pins;
            break;
    }

    if (rollNum === 1 && pins === 10) {
        rollDisplay = "X";
    }
    else if (rollNum === 1 && pins === 0){
        rollDisplay = "-";
    }
    else if (rollNum === 1){
        rollDisplay = pins;
    }
    else if (rollNum === 2 && this.rollPins_1 + this.rollPins_2 === 10) {
        rollDisplay = "/";
    }
    else if (rollNum === 2 && pins === 0) {
        rollDisplay = "-";
    }
    else if (rollNum === 2) {
        rollDisplay = pins;
    }
    else {
        rollDisplay = "";
    }

    return rollDisplay;

};



Bowling.Game = function () {

    // public properties
    this.frames = new Array();
    this.framesPlayed = 0;
};

// getTotalScore method
Bowling.Game.prototype.getTotalScore = function () {
    var totalScore = 0;

    for (var i = 0; i < this.frames.length; i++) {
        totalScore += this.frames[i].roll1;
        totalScore += this.frames[i].roll2;
        totalScore += this.frames[i].roll3;
    }
    return totalScore;
};


// addFrame method
Bowling.Game.prototype.addFrame = function (frameNum) {
    var newFrame = new Bowling.Frame(frameNum);

    var length = this.frames.push(newFrame);

    var index = length - 1;
    return this.frames[index];
};

// updateFrameScores method
Bowling.Game.prototype.updateFrameScores = function (frameNum) {
    var newFrame = new Bowling.Frame(frameNum);

    var length = this.frames.push(newFrame);

    var index = length - 1;
    return this.frames[index];
};


