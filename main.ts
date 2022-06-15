info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    game.splash("Do not waste time!", "Although, being ")
})
function playLevel () {
    mainCharacter.setPosition(20, 180)
    levelFinish = 0
    controller.moveSprite(mainCharacter, 50, 0)
    info.startCountdown(90)
    while (levelFinish == 0) {
        // prevents game from CRASHING!
        pause(100)
        if (controller.up.isPressed()) {
            vy = -70
            mainCharacter.vy = vy
            while (!(mainCharacter.isHittingTile(CollisionDirection.Bottom))) {
                mainCharacter.vy += 1
                pause(10)
            }
        }
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            mainCharacter,
            assets.animation`WalkR`,
            100,
            true
            )
        }
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            mainCharacter,
            assets.animation`WalkL`,
            100,
            true
            )
        }
        if (!(mainCharacter.isHittingTile(CollisionDirection.Bottom))) {
            mainCharacter.vy += 5
            pause(10)
        }
        if (mainCharacter.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10)) {
            music.powerDown.play()
            game.splash("Don't fall into the abyss!", "That is bad!")
            mainCharacter.setPosition(20, 180)
            info.changeLifeBy(-1)
        }
    }
}
function prepareLevel (levelNum: number) {
    if (levelNum == 1) {
        scene.setBackgroundColor(8)
        mainCharacter = sprites.create(assets.image`mainWalkR`, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.cameraFollowSprite(mainCharacter)
        info.setLife(3)
        playLevel()
    }
}
let vy = 0
let levelFinish = 0
let mainCharacter: Sprite = null
prepareLevel(1)
// Remove for testing
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
