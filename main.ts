controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...ffffff..........ccc..
        ...ff22ccff.......c44f..
        ....fffccccfff...c442f..
        ....cc24442222ccc4422f..
        ...c99b222222222cc22fc..
        ..c999111b222222222222c.
        .c2bb11199222ccccccc222f
        c22222222222c222cccfffff
        f22222222222442222ccc...
        .f222222222224442222c...
        ..ff2222222cffc44222c...
        ....fffffffcffffcccc....
        .........f2c2ffff.......
        .........fcc2ffff.......
        ..........ffffff........
        ........................
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let otherSprite: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ...ffffff..........ccc..
    ...ff22ccff.......c44f..
    ....fffccccfff...c442f..
    ....cc24442222ccc4422f..
    ...c99b222222222cc22fc..
    ..c999111b222222222222c.
    .c2bb11199222ccccccc222f
    c22222222222c222cccfffff
    f22222222222442222ccc...
    .f222222222224442222c...
    ..ff2222222cffc44222c...
    ....fffffffcffffcccc....
    .........f2c2ffff.......
    .........fcc2ffff.......
    ..........ffffff........
    ........................
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
otherSprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    otherSprite = sprites.create(img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    otherSprite.setVelocity(-100, 0)
    otherSprite.setPosition(160, randint(5, 115))
    otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
