function playLevel () {
    levelFinish = 0
    controller.moveSprite(mainCharacter, 50, 0)
    while (levelFinish == 0) {
        // prevents game from CRASHING!
        pause(100)
        if (controller.up.isPressed()) {
            vy = -20
            mainCharacter.vy = vy
            while (!(mainCharacter.isHittingTile(CollisionDirection.Bottom))) {
                mainCharacter.vy += 1
                pause(100)
            }
        }
    }
}
function prepareLevel (levelNum: number) {
    scene.setBackgroundColor(8)
    mainCharacter = sprites.create(assets.image`mainWalkR`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level1`)
    // buffer
    // 
    pause(100)
    scene.cameraFollowSprite(mainCharacter)
    playLevel()
    if (levelNum == 1) {
    	
    }
}
let vy = 0
let mainCharacter: Sprite = null
let levelFinish = 0
scene.setBackgroundColor(0)
music.playMelody("C E D F E G F A ", 600)
story.printText("Welcome To...", 75, 60)
story.printText("Forest", 75, 30, 7, 15, story.TextSpeed.VeryFast)
story.printText("Adventure", 75, 60, 2, 15, story.TextSpeed.VeryFast)
story.printText("1", 75, 90, 8, 15, story.TextSpeed.VeryFast)
let trackNumber = 1
story.showPlayerChoices("Play", "Controls")
if (story.checkLastAnswer("Play")) {
    prepareLevel(1)
} else {
	
}
