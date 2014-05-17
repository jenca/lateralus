var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', {preload:preload, create: create});

function preload() {
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.setScreenSize();
}

function create() {
	word = "- GAMESTARTER -";

	game.stage.backgroundColor = 0xbd4030;
    text = game.add.text(game.world.centerX, game.world.centerY, word);

    text.anchor.set(0.5);
    text.align = 'center';

    text.font = 'Arial';
    text.fontWeight = 'bold';
    text.fontSize = 70;
    text.fill = '#ffffff';

    textReflect = game.add.text(game.world.centerX, game.world.centerY + 50, word);

    textReflect.anchor.set(0.5);
    textReflect.align = 'center';
    textReflect.scale.y = -1;

    textReflect.font = 'Arial';
    textReflect.fontWeight = 'bold';
    textReflect.fontSize = 70;

    var grd = textReflect.context.createLinearGradient(0, 0, 0, text.canvas.height);

    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(1, 'rgba(255,255,255,0.15)');

    textReflect.fill = grd;
}
