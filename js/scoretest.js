var expect = chai.expect;

describe( 'ScoreTest', function () {



  it( 'save cumulative score 3 rolls', function () {
   	setScore(5);
   	setScore(3);
   	setScore(4);
    var result = getCumulativeScore();
    expect( result ).to.be.equal([5,3,4]);
  });


  it( 'get the current ball score', function () {
    setScore(5);
    var result = getCurrentRoll();
    expect( result ).to.be.equal(5);
  });


it( 'clear the cumulative score', function () {
    clearCumulativeScore();
    var result = getCumulativeScore();
    expect( result.length ).to.be.equal(0);
  });

 
});
