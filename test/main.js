require("chai").should();

describe('Phaser Game', function() {
  describe('Phaser Template', function() {
    it('should be awesome!', function() {
      var phaserGameTemplate = function() {
        return 'awesome';
      };
      phaserGameTemplate().should.equal('awesome');
    });
  });
});
