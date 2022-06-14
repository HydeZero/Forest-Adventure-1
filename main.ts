function playLevel () {
    controller.moveSprite(mainCharacter, 50, 0)
    if (controller.up.isPressed()) {
        mainCharacter.vy = 10
    }
}
function prepareLevel (levelNum: number) {
    mainCharacter = sprites.create(assets.image`mainWalkR`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level1`)
    playLevel()
    if (levelNum == 1) {
    	
    }
}
let mainCharacter: Sprite = null
scene.setBackgroundColor(0)
music.playMelody("C E D F E G F A ", 600)
story.printText("Welcome To...", 75, 60)
story.printText("Forest", 75, 30, 7, 15, story.TextSpeed.VeryFast)
story.printText("Platformer", 75, 60, 2, 15, story.TextSpeed.VeryFast)
story.printText("1", 75, 90, 8, 15, story.TextSpeed.VeryFast)
let trackNumber = 1
story.showPlayerChoices("Play", "Controls")
if (story.checkLastAnswer("Play")) {
    prepareLevel(1)
} else {
	
}
