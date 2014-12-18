var expect = chai.expect;

describe( 'ScoreTest', function () {

  it( 'save current ball score', function () {
    setScore();
    var result = [];
    result = getCurrentRoll();
    expect( result ).to.be.equal(1);
  });
 
});
