var expect = chai.expect;

describe( 'ScoreTest', function () {

  it( 'save current ball score', function () {
    //setScore();
    alert("It's working");
    var result = getCurrentRoll();
    expect( result.length ).to.equal( 1 );
  });
 
});
