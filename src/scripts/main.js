var menu = require('./states/menu');

var game = new Phaser.Game(1280, 720, Phaser.AUTO, '');
game.state.add('menu', menu);
game.state.start('menu');
