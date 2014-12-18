	var dirx = 1; 
	var diry = 1; 
	var spdx = setRand(); 
	var spdy = setRand(); 
	var imgLeftInt; 
	var imgTopInt; 
	var imgHeight; 	
	var imgWidth; 
 	var imgStrLeftInt = parseInt(document.images['ball1'].style.left); 
 	var winWidth; 
	var winHeight; 
	var t; 

	function resetBall() {
		clearInterval(t);
		dirx = 1; 
	    spdx= 120; // here is where we could change the speed of the ball 
 	    document.images['ball1'].style.left = imgStrLeftInt +"px"; 
 	}
  	function animBall(on) {   

  		//need code to disable "Roll Ball" action while this is active
  		// since js is async, user can push roll while animation = bad            
 	    imgLeftInt = parseInt(document.images['ball1'].style.left); 
 	    imgTopInt = parseInt(document.images['ball1'].style.top); 
 	    imgHeight =  parseInt(document.images['ball1'].height); 
 	    imgWidth =  parseInt(document.images['ball1'].width); 
 	    winWidth = parseInt(computeWin().windWidth) / 1.30; 
 	    winHeight = parseInt(computeWin().windHeight); 
 	 
 	    if(dirx == 1){                            // if I should go right... 
 	        goRight(); 
 	    } else {                                     // otherwise, I'd better go left! 
 	        //goLeft();
 	        document.getElementById('pinResult').innerHTML = getScore();
 	        resetBall();
 	    } 
 	 
 	    //if(diry == 1) {                             // if I should go down... 
 	    //    goDown();  
 	    //} else {                                              // otherwise, I'll go up! 
	    //    goUp(); 
	    //} 
	 
	} 
 	 
 	function goRight() { 
 	    document.images['ball1'].style.left = imgLeftInt+spdx +"px"; 
 	    if (imgLeftInt >  (winWidth-imgWidth)){ 
 	        dirx = 0; 
 	       // spdx= setRand(); 
 	    } 
 	} 
 	 
 	function goLeft() { 
 	    document.images['ball1'].style.left = (imgLeftInt-spdx) +"px"; 
 	    if (imgLeftInt <  5){ 
 	        dirx = 1; 
 	        spdx= setRand(); 
 	    } 
 	} 
 	 
 	function goDown() { 
     document.images['ball1'].style.top = imgTopInt+spdy+"px"; 
 	    if (imgTopInt >  (winHeight-imgHeight)){ 
 	        diry = 0; 
 	        spdy= setRand(); 
 	    } 
 	} 
 	 
 	function goUp() { 
 	    document.images['ball1'].style.top = (imgTopInt-spdy) +"px"; 
 	    if (imgTopInt < 5){ 
 	        diry = 1; 
 	        spdy= setRand(); 
 	    } 
 	} 
	 
	function setRand() { 
		//This controls the speed of the ball. It rolls the ball
		//at a random speed, we go with this, put some logic around
		// min\max speeds
	    randnum= Math.floor(Math.random()*50);
	    console.log(randnum);
	   // randnum += 100; 
	    return randnum; 
	} 
	 
	function computeWin(){ 
	    if(document.body.clientWidth) { 
	        this.windWidth=document.body.clientWidth; 
	        this.windHeight=document.body.clientHeight; 
	    } else { 
	        this.windWidth = window.innerWidth; 
	        this.windHeight=document.innerHeight; 
	    } 
	return this; 
	} 