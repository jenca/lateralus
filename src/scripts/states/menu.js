module.exports = {
	preload: function () {
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.scale.setScreenSize();
	},

	create: function () {
		var word = "- GAMESTARTER -";
		var centerX = this.game.world.centerX;
		var centerY = this.game.world.centerY;

		this.game.stage.backgroundColor = 0xbd4030;

		var text = this.game.add.text(centerX, centerY, word);
		text.anchor.set(0.5);
		text.align = 'center';
		text.font = 'Arial';
		text.fontWeight = 'bold';
		text.fontSize = 70;
		text.fill = '#ffffff';

		var textReflect = this.game.add.text(centerX, centerY + 50, word);
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
};
