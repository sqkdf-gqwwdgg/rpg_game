namespace SpriteKind {
    export const bat = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const snake = SpriteKind.create()
    export const mini_kaiju = SpriteKind.create()
    export const mage = SpriteKind.create()
    export const warrior = SpriteKind.create()
    export const healer = SpriteKind.create()
    export const move1 = SpriteKind.create()
    export const move2 = SpriteKind.create()
    export const move3 = SpriteKind.create()
    export const move4 = SpriteKind.create()
    export const player_to_enemy_projectile = SpriteKind.create()
}
namespace StatusBarKind {
    export const enemyhealth2 = StatusBarKind.create()
    export const enemyhealth3 = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    enemy1.setPosition(-60, 0)
    list2.removeAt(0)
    picked_value = randint(0, 3)
    enemy1 = enemykind1[picked_value]
    enemy1.setPosition(20, 40)
    list2[0] = enemy1
    enemykindinquestion = enemy1
    sethealth(enemy1)
    statusbar.max = enemyspecs[1]
    statusbar.value = enemyspecs[2]
    statusbar.attachToSprite(enemykindinquestion)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move_being_made) {
        if (place == 0) {
            place = 2
        } else {
            place += -1
        }
        tracker.setPosition(list2[place].x, list2[place].y)
    } else {
        if (move_set_open) {
            placement2 = 0
            tracker.setPosition(list3[place][0].x, list3[place][0].y)
        } else {
            if (place == 0) {
                place = 2
            } else {
                place += -1
            }
            tracker.setPosition(_import[place].x, _import[place].y)
        }
    }
})
function declaremovesets () {
    healermoves = [
    sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.move1),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.move2),
    sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `, SpriteKind.move3),
    sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.move4)
    ]
    magemoves = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.move1),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.move2),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `, SpriteKind.move3),
    sprites.create(img`
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        . . . 6 7 7 8 . 
        `, SpriteKind.move4)
    ]
    warriormoves = [
    sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ......bbb...bbb.....
        .....bdddb.bddcb....
        ....bdddddbddbccb...
        ....bdddddddbbccb...
        ....bddddddbbcccb...
        .....bddddbbcccb....
        ......bbdbbcccb.....
        .......bcccccb......
        ........bcccb.......
        .........bcb........
        ..........b.........
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.move1),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.move2),
    sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.move3),
    sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......8888888......
        .......8998888......
        .......8988888......
        .......8888888......
        .......8888888......
        .......8888888......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.move4)
    ]
    for (let value of sprites.allOfKind(SpriteKind.move1)) {
        value.setPosition(60, 40)
    }
    for (let value of sprites.allOfKind(SpriteKind.move2)) {
        value.setPosition(40, 60)
    }
    for (let value of sprites.allOfKind(SpriteKind.move3)) {
        value.setPosition(60, 80)
    }
    for (let value of warriormoves) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
    for (let value of magemoves) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
    for (let value of healermoves) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list3[place]) {
        value.setFlag(SpriteFlag.Invisible, true)
        tracker.setPosition(_import[place].x, _import[place].y)
        move_set_open = false
    }
})
function domove (num: number) {
    what_move_player_is_doing = num
    if (num == 1) {
        move_being_made = true
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move_being_made) {
        run_attack_code_for_whatever_the_hell_the_player_is_doing(what_move_player_is_doing, list2[place])
        move_being_made = false
    } else {
        if (move_set_open) {
            moveimagecopy = list3[place][placement2].image
            figure_out_what_move_player_is_doing()
        } else {
            for (let value of list3[place]) {
                value.setFlag(SpriteFlag.Invisible, false)
                tracker.setPosition(value.x, value.y)
                move_set_open = true
            }
        }
    }
})
function enemyspawning () {
    declare_storage()
    enemy1 = enemykind1[0]
    enemy2 = enemykind2[0]
    enemy3 = enemykind3[0]
    enemy3.setPosition(20, 80)
    enemy2.setPosition(20, 60)
    enemy1.setPosition(20, 40)
    enemykindinquestion = enemy1
    sethealth(enemy1)
    statusbar = statusbars.create(enemyspecs[0], 2, StatusBarKind.EnemyHealth)
    statusbar.max = enemyspecs[1]
    statusbar.value = enemyspecs[2]
    statusbar.attachToSprite(enemykindinquestion)
    enemykindinquestion = enemy2
    sethealth(enemy2)
    statusbar2 = statusbars.create(enemyspecs[0], 2, StatusBarKind.enemyhealth2)
    statusbar2.max = enemyspecs[1]
    statusbar2.value = enemyspecs[2]
    statusbar2.attachToSprite(enemykindinquestion)
    enemykindinquestion = enemy3
    sethealth(enemy3)
    statusbar3 = statusbars.create(enemyspecs[0], 2, StatusBarKind.enemyhealth3)
    statusbar3.max = enemyspecs[1]
    statusbar3.value = enemyspecs[2]
    statusbar3.attachToSprite(enemykindinquestion)
}
function advanceroom () {
    scroller.scrollBackgroundWithSpeed(50, 0)
    if (room_empty) {
        animation.runImageAnimation(
        warrior,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
        animation.runImageAnimation(
        mage,
        [img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 5 b b e b b e . . . 
            . . . . f 5 5 5 5 e b b e . . . 
            . . . . c b 5 5 5 5 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c 5 c . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b e e f f . . . 
            . . . . . f e e e b b e f . . . 
            . . . . f 5 b b e b b e . . . . 
            . . . . c 5 5 5 5 e e f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 5 b b e b b e . . . 
            . . . . f 5 5 5 5 e b b e . . . 
            . . . . c b 5 5 5 5 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c 5 c . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e e b b e . . 
            . . . . f 5 5 b b b e b b e . . 
            . . . . c 5 5 5 5 5 e e e . . . 
            . . . . . f f f f f f . . . . . 
            `],
        100,
        true
        )
        animation.runImageAnimation(
        healer,
        [img`
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . f 3 e e e f b f b b b b f . . 
            . . f e 4 4 f 1 e b b b b f . . 
            . . . f 4 4 4 4 f b b b b f f . 
            . . . f e e e f f f b b b b f . 
            . . . f d d d e 4 4 f b b f . . 
            . . . f d d d e 4 4 e f f . . . 
            . . f b d b d b e e b f . . . . 
            . . f f 1 d 1 d 1 d f f . . . . 
            . . . . f f b b f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . . f e e e f b f b b b b f f . 
            . . . e 4 4 f 1 e b b b b b f . 
            . . . f 4 4 4 4 f b b b b b f . 
            . . . f d d d e 4 4 b b b f . . 
            . . . f d d d e 4 4 f f f . . . 
            . . f d d d b b e e b b f . . . 
            . . f b d 1 d 1 d d b f . . . . 
            . . . f f f b b f f f . . . . . 
            `],
        100,
        true
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move_being_made) {
    	
    } else {
        if (move_set_open) {
            placement2 = 1
            tracker.setPosition(list3[place][1].x, list3[place][1].y)
        } else {
            _import = list2
            tracker.setPosition(list2[place].x, list2[place].y)
        }
    }
})
function declare_storage () {
    enemykind1 = [
    sprites.create(img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, SpriteKind.bat),
    sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost),
    sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `, SpriteKind.snake),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 3 c 3 5 f f . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `, SpriteKind.mini_kaiju)
    ]
    enemykind2 = [
    sprites.create(img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, SpriteKind.bat),
    sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost),
    sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `, SpriteKind.snake),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 3 c 3 5 f f . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `, SpriteKind.mini_kaiju)
    ]
    enemykind3 = [
    sprites.create(img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, SpriteKind.bat),
    sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost),
    sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `, SpriteKind.snake),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 3 c 3 5 f f . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `, SpriteKind.mini_kaiju)
    ]
    for (let value of enemykind1) {
        value.setPosition(-60, 0)
    }
    for (let value of enemykind2) {
        value.setPosition(-60, 0)
    }
    for (let value of enemykind3) {
        value.setPosition(-60, 0)
    }
}
sprites.onCreated(SpriteKind.warrior, function (sprite) {
    warriorhealth = statusbars.create(20, 2, StatusBarKind.Health)
    warriorhealth.max = 120
    warriorhealth.value = 120
    warriorhealth.attachToSprite(sprite)
})
function who_got_hit (num: number) {
    if (num == 1) {
        if (list2[place] == enemy1) {
            statusbar.value += -12
        }
        if (list2[place] == enemy2) {
            statusbar2.value += -12
        }
        if (list2[place] == enemy3) {
            statusbar3.value += -12
        }
    }
}
function run_attack_code_for_whatever_the_hell_the_player_is_doing (num: number, sprite: Sprite) {
    if (num == 1) {
        tracker.setPosition(list2[place].x, list2[place].y)
        for (let index = 0; index < 4; index++) {
            pause(200)
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . b 5 5 5 b . . . . . 
                . . . . . b b 5 5 5 b b . . . . 
                . . b b b b 5 5 5 1 1 b b b b . 
                . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
                . . b d d 5 5 5 5 5 5 5 d d b . 
                . . . b d d 5 5 5 5 5 d d b . . 
                . . . c b 5 5 5 5 5 5 5 b c . . 
                . . . c b 5 5 5 5 5 5 5 b c . . 
                . . . c 5 5 d d b d d 5 5 c . . 
                . . . c 5 d d c c c d d 5 c . . 
                . . . c c c c . . . c c c c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.player_to_enemy_projectile)
            mySprite.setPosition(100, 4)
            mySprite.follow(sprite)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move_being_made) {
    	
    } else {
        if (move_set_open) {
            placement2 = 3
            tracker.setPosition(list3[place][3].x, list3[place][3].y)
        } else {
            _import = list
            tracker.setPosition(list[place].x, list[place].y)
        }
    }
})
sprites.onCreated(SpriteKind.healer, function (sprite) {
    healerhealth = statusbars.create(20, 2, StatusBarKind.Health)
    healerhealth.max = 145
    healerhealth.value = 145
    healerhealth.attachToSprite(sprite)
})
function figure_out_what_move_player_is_doing () {
    list_of_images = [
    img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b d d b b . 
        b 1 1 3 3 1 1 b 
        b 1 3 5 5 3 1 b 
        b d 3 5 5 3 d b 
        c 1 1 d d 1 1 c 
        c d 1 d d 1 d c 
        . c c 7 6 c c . 
        . . 6 7 6 . . . 
        . . 6 6 8 8 8 6 
        . . 6 8 7 7 7 6 
        . . 8 7 7 7 6 . 
        . . 8 8 8 6 . . 
        `,
    img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `,
    img`
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        . . . 6 7 7 8 . 
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ......bbb...bbb.....
        .....bdddb.bddcb....
        ....bdddddbddbccb...
        ....bdddddddbbccb...
        ....bddddddbbcccb...
        .....bddddbbcccb....
        ......bbdbbcccb.....
        .......bcccccb......
        ........bcccb.......
        .........bcb........
        ..........b.........
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......8888888......
        .......8998888......
        .......8988888......
        .......8888888......
        .......8888888......
        .......8888888......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `
    ]
    counter = 0
    for (let value of list_of_images) {
        if (moveimagecopy.equals(list_of_images[counter])) {
            domove(counter)
        }
        counter += 1
    }
    for (let value of list3[place]) {
        value.setFlag(SpriteFlag.Invisible, true)
        tracker.setPosition(_import[place].x, _import[place].y)
        move_set_open = false
    }
    placement2 = 3
}
sprites.onOverlap(SpriteKind.player_to_enemy_projectile, SpriteKind.ghost, function (sprite, otherSprite) {
    who_got_hit(what_move_player_is_doing)
    sprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move_being_made) {
        if (place == list2.length - 1) {
            place = 0
        } else {
            place += 1
        }
        tracker.setPosition(list2[place].x, list2[place].y)
    } else {
        if (move_set_open) {
            placement2 = 2
            tracker.setPosition(list3[place][2].x, list3[place][2].y)
        } else {
            if (place == list.length - 1) {
                place = 0
            } else {
                place += 1
            }
            tracker.setPosition(_import[place].x, _import[place].y)
        }
    }
})
sprites.onOverlap(SpriteKind.player_to_enemy_projectile, SpriteKind.snake, function (sprite, otherSprite) {
    who_got_hit(what_move_player_is_doing)
    sprite.destroy()
})
sprites.onCreated(SpriteKind.mage, function (sprite) {
    magehealth = statusbars.create(20, 2, StatusBarKind.Health)
    magehealth.max = 80
    magehealth.value = 80
    magehealth.attachToSprite(sprite)
})
statusbars.onStatusReached(StatusBarKind.enemyhealth2, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    enemy2.setPosition(-60, 0)
    list2.removeAt(1)
    picked_value = randint(0, 3)
    enemy2 = enemykind2[picked_value]
    enemy2.setPosition(20, 40)
    list2[0] = enemy1
    list2[1] = enemy2
    list2[2] = enemy3
    enemykindinquestion = enemy2
    sethealth(enemy2)
    statusbar.max = enemyspecs[1]
    statusbar.value = enemyspecs[2]
    statusbar.attachToSprite(enemykindinquestion)
})
function sethealth (sprite: Sprite) {
    if (enemykindinquestion == enemykind1[0]) {
        enemyspecs = [20, 25, 25]
    } else if (enemykindinquestion == enemykind1[1]) {
        enemyspecs = [20, 40, 40]
    } else if (enemykindinquestion == enemykind1[2]) {
        enemyspecs = [20, 30, 30]
    } else if (enemykindinquestion == enemykind1[3]) {
        enemyspecs = [20, 60, 60]
    }
}
sprites.onOverlap(SpriteKind.player_to_enemy_projectile, SpriteKind.mini_kaiju, function (sprite, otherSprite) {
    who_got_hit(what_move_player_is_doing)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.player_to_enemy_projectile, SpriteKind.bat, function (sprite, otherSprite) {
    who_got_hit(what_move_player_is_doing)
    sprite.destroy()
})
let magehealth: StatusBarSprite = null
let counter = 0
let list_of_images: Image[] = []
let healerhealth: StatusBarSprite = null
let mySprite: Sprite = null
let warriorhealth: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let enemykind3: Sprite[] = []
let enemykind2: Sprite[] = []
let moveimagecopy: Image = null
let what_move_player_is_doing = 0
let move_set_open = false
let move_being_made = false
let enemyspecs: number[] = []
let statusbar: StatusBarSprite = null
let enemykindinquestion: Sprite = null
let enemykind1: Sprite[] = []
let picked_value = 0
let placement2 = 0
let _import: Sprite[] = []
let enemy3: Sprite = null
let enemy2: Sprite = null
let enemy1: Sprite = null
let list2: Sprite[] = []
let place = 0
let warriormoves: Sprite[] = []
let magemoves: Sprite[] = []
let healermoves: Sprite[] = []
let list3: Sprite[][] = []
let list: Sprite[] = []
let room_empty = false
let mage: Sprite = null
let warrior: Sprite = null
let healer: Sprite = null
let tracker: Sprite = null
tracker = sprites.create(img`
    5 5 1 . . . . . . . . . . 1 5 5 
    5 1 . . . . . . . . . . . . 1 5 
    1 . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . . 1 
    5 1 . . . . . . . . . . . . 1 5 
    5 5 1 . . . . . . . . . . 1 5 5 
    `, SpriteKind.Player)
healer = sprites.create(img`
    . . . f 4 4 f f f f . . . . . . 
    . . f 4 5 5 4 5 f b f f . . . . 
    . . f 5 5 5 5 4 e 3 3 b f . . . 
    . . f e 4 4 4 e 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e e 3 b e 3 3 3 3 f . . 
    . f 3 3 e e e f f 3 3 3 3 f . . 
    . f 3 e e e f b f b b b b f . . 
    . . f e 4 4 f 1 e b b b b f . . 
    . . . f 4 4 4 4 f b b b b f f . 
    . . . f e e e f f f b b b b f . 
    . . . f d d d e 4 4 f b b f . . 
    . . . f d d d e 4 4 e f f . . . 
    . . f b d b d b e e b f . . . . 
    . . f f 1 d 1 d 1 d f f . . . . 
    . . . . f f b b f f . . . . . . 
    `, SpriteKind.healer)
warrior = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f f . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 2 2 2 e . . . . 
    . . . f f e e f 4 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.warrior)
mage = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c . . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b b b f f . . . 
    . . . . . f e e e e f e e . . . 
    . . . . . f 5 b b e b b e . . . 
    . . . . f 5 5 5 5 e b b e . . . 
    . . . . c b 5 5 5 5 e e . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.mage)
healer.setPosition(100, 40)
mage.setPosition(100, 60)
warrior.setPosition(100, 80)
tracker.setPosition(100, 40)
room_empty = true
list = [healer, mage, warrior]
declaremovesets()
list3 = [healermoves, magemoves, warriormoves]
animation.runImageAnimation(
tracker,
[img`
    5 5 1 . . . . . . . . . . 1 5 5 
    5 1 . . . . . . . . . . . . 1 5 
    1 . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . . 1 
    5 1 . . . . . . . . . . . . 1 5 
    5 5 1 . . . . . . . . . . 1 5 5 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 5 5 1 . . . . . . . . 1 5 5 . 
    . 5 1 . . . . . . . . . . 1 5 . 
    . 1 . . . . . . . . . . . . 1 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . 1 . 
    . 5 1 . . . . . . . . . . 1 5 . 
    . 5 5 1 . . . . . . . . 1 5 5 . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 1 . . . . . . 1 5 5 . . 
    . . 5 1 . . . . . . . . 1 5 . . 
    . . 1 . . . . . . . . . . 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 . . . . . . . . . . 1 . . 
    . . 5 1 . . . . . . . . 1 5 . . 
    . . 5 5 1 . . . . . . 1 5 5 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 5 5 1 . . . . . . . . 1 5 5 . 
    . 5 1 . . . . . . . . . . 1 5 . 
    . 1 . . . . . . . . . . . . 1 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . 1 . 
    . 5 1 . . . . . . . . . . 1 5 . 
    . 5 5 1 . . . . . . . . 1 5 5 . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
place = 0
enemyspawning()
list2 = [enemy1, enemy2, enemy3]
_import = list
placement2 = 3
