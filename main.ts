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
    export const bob = SpriteKind.create()
    export const from_the_ground = SpriteKind.create()
}
namespace StatusBarKind {
    export const enemyhealth2 = StatusBarKind.create()
    export const enemyhealth3 = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    enemy1.setImage(enemykind1[randint(0, 2)])
    sethealth(enemy1)
    statusbar = statusbars.create(enemyspecs[0], 2, StatusBarKind.EnemyHealth)
    statusbar.max = enemyspecs[1]
    statusbar.value = enemyspecs[2]
    statusbar.attachToSprite(enemy1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enemymove) {
    	
    } else {
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
    }
})
function damage_enemy2 (normalnum: number, critnum: number, enemy: Sprite) {
    if (enemy == statusbar.spriteAttachedTo()) {
        if (status20 > 0) {
            statusbar.value += critnum
        } else {
            statusbar.value += normalnum
        }
    }
    if (enemy == statusbar2.spriteAttachedTo()) {
        if (status21 > 0) {
            statusbar2.value += critnum
        } else {
            statusbar2.value += normalnum
        }
    }
    if (enemy == statusbar3.spriteAttachedTo()) {
        if (status22 > 0) {
            statusbar3.value += critnum
        } else {
            statusbar3.value += normalnum
        }
    }
}
sprites.onOverlap(SpriteKind.player_to_enemy_projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    who_got_hit(what_move_player_is_doing)
    sprite.destroy()
    crits.value += 2
})
function set_enemy_statuses () {
    let status32 = 0
    let status12 = 0
    let status31 = 0
    let status11 = 0
    let status30 = 0
    let status10 = 0
    enemy1statuses = [
    status00,
    status10,
    status20,
    status30
    ]
    enemy2statuses = [
    status01,
    status11,
    status21,
    status31
    ]
    enemy3statuses = [
    status02,
    status12,
    status22,
    status32
    ]
    // fire 1st enemy status
    // just does damage over time
    // deaf 2nd status 
    // just disallows attack
    // marked for death 3rd status just increases damage done to enemy
    // weakened 4th enemy status
    // does less damagesasawsawdsawdss
    literally_just_for_me_to_keep_track_of_statuses = 0
}
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
    if (enemymove) {
    	
    } else {
        for (let value of list3[place]) {
            value.setFlag(SpriteFlag.Invisible, true)
            tracker.setPosition(_import[place].x, _import[place].y)
            move_set_open = false
        }
    }
})
function domove (num: number) {
    what_move_player_is_doing = num
    if (num == 0) {
        move_being_made = true
    }
    if (num == 1) {
        move_being_made = true
    }
    if (num == 2) {
        move_being_made = true
    }
    if (num == 4) {
        move_being_made = true
    }
    if (num == 5) {
        move_being_made = true
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enemymove) {
    	
    } else {
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
    }
})
function enemyspawning () {
    declare_storage()
    placeholdersprite = sprites.create(placeholder1[4], SpriteKind.bob)
    enemy1 = sprites.create(enemykind1[0], SpriteKind.Enemy)
    enemy2 = sprites.create(enemykind2[0], SpriteKind.Enemy)
    enemy3 = sprites.create(enemykind3[0], SpriteKind.Enemy)
    enemy1.setPosition(20, 40)
    enemy3.setPosition(20, 80)
    enemy2.setPosition(20, 60)
    sethealth(enemy1)
    statusbar = statusbars.create(enemyspecs[0], 2, StatusBarKind.EnemyHealth)
    statusbar.max = enemyspecs[1]
    statusbar.value = enemyspecs[2]
    statusbar.attachToSprite(enemy1)
    sethealth(enemy2)
    statusbar2 = statusbars.create(enemyspecs[0], 2, StatusBarKind.enemyhealth2)
    statusbar2.max = enemyspecs[1]
    statusbar2.value = enemyspecs[2]
    statusbar2.attachToSprite(enemy2)
    sethealth(enemy3)
    statusbar3 = statusbars.create(enemyspecs[0], 2, StatusBarKind.enemyhealth3)
    statusbar3.max = enemyspecs[1]
    statusbar3.value = enemyspecs[2]
    statusbar3.attachToSprite(enemy3)
}
function effects2 () {
    if (enemy1statuses[0] > 0) {
        enemy1.startEffect(effects.fire, 1000)
    }
    if (enemy2statuses[0] > 0) {
        enemy2.startEffect(effects.fire, 1000)
    }
    if (enemy3statuses[0] > 0) {
        enemy3.startEffect(effects.fire, 1000)
    }
    if (enemy1statuses[2] > 0) {
        enemy1.startEffect(effects.trail, 1000)
    }
    if (enemy2statuses[2] > 0) {
        enemy2.startEffect(effects.trail, 1000)
    }
    if (enemy3statuses[2] > 0) {
        enemy3.startEffect(effects.trail, 1000)
    }
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
    img`
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
        `,
    img`
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
        `,
    img`
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
        `,
    img`
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
        `
    ]
    enemykind2 = [
    img`
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
        `,
    img`
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
        `,
    img`
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
        `,
    img`
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
        `
    ]
    enemykind3 = [
    img`
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
        `,
    img`
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
        `,
    img`
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
        `,
    img`
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
        `
    ]
    placeholder1 = [
    img`
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
        `,
    img`
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
        `,
    img`
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
        `,
    img`
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
        `,
    img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    batmoves = [0, 1]
    kaijumoves = [0, 1]
    snakemoves = [0, 1]
    ghostmoves = [0, 1]
}
sprites.onCreated(SpriteKind.warrior, function (sprite) {
    warriorhealth = statusbars.create(20, 2, StatusBarKind.Health)
    warriorhealth.max = 120
    warriorhealth.value = 120
    warriorhealth.attachToSprite(sprite)
})
function who_got_hit (num: number) {
    if (num == 1) {
        damage_enemy(-12, -36)
        crits.value += 3
    }
    if (num == 5) {
        damage_enemy(-75, -125)
        if (list2[place] == enemy1) {
            status00 += 2
        } else if (list2[place] == enemy2) {
            status01 += 2
        } else {
            status02 += 2
        }
    }
    enemymoves()
}
statusbars.onStatusReached(StatusBarKind.enemyhealth3, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    enemy3.setImage(enemykind3[randint(0, 2)])
    sethealth(enemy3)
    statusbar3 = statusbars.create(enemyspecs[0], 2, StatusBarKind.EnemyHealth)
    statusbar3.max = enemyspecs[1]
    statusbar3.value = enemyspecs[2]
    statusbar3.attachToSprite(enemy3)
})
function run_attack_code_for_whatever_the_hell_the_player_is_doing (num: number, sprite: Sprite) {
    if (num == 0) {
        healer.startEffect(effects.hearts, 1000)
        warriorhealth.value += 30
        magehealth.value += 30
        healerhealth.value += 20
    }
    if (num == 1) {
        tracker.setPosition(list2[place].x, list2[place].y)
        for (let index = 0; index < 4; index++) {
            pause(200)
            flowerthingy = sprites.create(img`
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
            flowerthingy.setPosition(100, 4)
            flowerthingy.follow(sprite)
        }
    }
    if (num == 2) {
        tracker.setPosition(list2[place].x, list2[place].y)
        status20 += 3
        status21 += 3
        status22 += 3
        for (let index = 0; index < 9; index++) {
            pause(200)
            flowerthingy = sprites.create(img`
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
                `, SpriteKind.from_the_ground)
            randomnum = randint(1, 3)
            if (randomnum == 1) {
                flowerthingy.setPosition(20, 40)
            }
            if (randomnum == 2) {
                flowerthingy.setPosition(20, 60)
            }
            if (randomnum == 3) {
                flowerthingy.setPosition(20, 80)
            }
        }
    }
    if (num == 4) {
        tracker.setPosition(list2[place].x, list2[place].y)
        boom = sprites.create(img`
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
            `, SpriteKind.from_the_ground)
        boom.setPosition(list2[place].x, list2[place].y)
    }
    if (num == 5) {
        tracker.setPosition(list2[place].x, list2[place].y)
        otherprojectile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.player_to_enemy_projectile)
        otherprojectile.follow(sprite)
        otherprojectile.setPosition(100, 60)
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
function beegboom (Sprite2: Sprite, Sprite1: Sprite) {
    if (what_move_player_is_doing == 4) {
        animation.runImageAnimation(
        Sprite2,
        [img`
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
            `,img`
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
            . . . . . 2 3 3 3 3 3 2 . . . . 
            . . . . 3 1 1 1 1 1 1 1 3 . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
            . . . 2 3 1 1 1 1 1 1 3 3 2 . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
            . . 4 d 5 d 5 5 5 d d d 4 4 . . 
            . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
            . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
            . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
            . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
            . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . . 2 4 d d 5 5 5 5 d d 5 4 . . 
            . . . 2 2 4 d 5 5 d d 4 4 . . . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `,img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
            . . b b b b 2 4 4 2 b b b b . . 
            . b d d d d 2 4 4 2 d d d d b . 
            b d d b b b 2 4 4 2 b b b d d b 
            b d d b b b b b b b b b b d d b 
            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
            . . b b d d 1 1 3 d d 1 b b . . 
            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
            `,img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . . b b . . . . . . 
            . . . b b b . . . . . . . . . . 
            . . b d d b . . . . . . . b b . 
            . b d d d b . . . . . . b d d b 
            . b d d b . . . . b b . b d d b 
            . b b b . . . . . b b . . b b . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b d d d d d d b b b . . 
            . b d c c c b b b b c c d d b . 
            b d d c b . . . . . b c c d d b 
            c d d b b . . . . . . b c d d c 
            c b d d d b b . . . . b d d c c 
            . c c b d d d d b . c c c c c c 
            . . . c c c c c c . . . . . . . 
            `],
        50,
        false
        )
        if (Sprite1 == statusbar2.spriteAttachedTo()) {
            if (status21 > 0) {
                statusbar2.value += -150
            } else {
                statusbar2.value += -125
            }
            statusbar.value += -25
            statusbar3.value += -25
        }
    }
}
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
sprites.onOverlap(SpriteKind.from_the_ground, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (what_move_player_is_doing == 2) {
        crits.value += 1
        if (otherSprite == statusbar.spriteAttachedTo()) {
            if (status20 > 0) {
                statusbar.value += -10
            } else {
                statusbar.value += -5
            }
        }
        if (otherSprite == statusbar2.spriteAttachedTo()) {
            if (status21 > 0) {
                statusbar2.value += -10
            } else {
                statusbar2.value += -5
            }
        }
        if (otherSprite == statusbar3.spriteAttachedTo()) {
            if (status22 > 0) {
                statusbar3.value += -10
            } else {
                statusbar3.value += -10
            }
        }
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        pause(500)
        sprite.destroy()
    }
    turn_ended()
})
sprites.onCreated(SpriteKind.mage, function (sprite) {
    magehealth = statusbars.create(20, 2, StatusBarKind.Health)
    magehealth.max = 80
    magehealth.value = 80
    magehealth.attachToSprite(sprite)
})
statusbars.onStatusReached(StatusBarKind.enemyhealth2, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    enemy2.setImage(enemykind2[randint(0, 2)])
    sethealth(enemy2)
    statusbar2 = statusbars.create(enemyspecs[0], 2, StatusBarKind.EnemyHealth)
    statusbar2.max = enemyspecs[1]
    statusbar2.value = enemyspecs[2]
    statusbar2.attachToSprite(enemy2)
})
function sethealth (sprite: Sprite) {
    if (sprite.image == enemykind1[0]) {
        enemyspecs = [20, 225, 225]
    } else if (sprite.image == enemykind1[1]) {
        enemyspecs = [20, 400, 400]
    } else if (sprite.image == enemykind1[2]) {
        enemyspecs = [20, 330, 330]
    } else if (sprite.image == enemykind1[3]) {
        enemyspecs = [20, 600, 600]
    }
}
function enemymoves () {
    enemymove = true
    enemy1.sayText("enemies currently cant attack, so this is a placeholder", 2000, false)
    pause(2000)
    enemymove = false
    turn_ended()
}
function do_enemy_attack () {
    which_enemy_attacking = list[randint(0, 2)]
}
function damage_enemy (normalnum: number, critnum: number) {
    if (list2[place] == enemy1) {
        if (status20 > 0) {
            statusbar.value += critnum
        } else {
            statusbar.value += normalnum
        }
    }
    if (list2[place] == enemy2) {
        if (status21 > 0) {
            statusbar2.value += critnum
        } else {
            statusbar2.value += normalnum
        }
    }
    if (list2[place] == enemy3) {
        if (status22 > 0) {
            statusbar3.value += critnum
        } else {
            statusbar3.value += normalnum
        }
    }
}
function turn_ended () {
    set_enemy_statuses()
    if (enemy1statuses[0] > 0) {
        statusbar.value += -25
    }
    if (enemy2statuses[0] > 0) {
        statusbar2.value += -25
    }
    if (enemy3statuses[0] > 0) {
        statusbar3.value += -25
    }
    for (let value of enemy1statuses) {
        if (value < 0) {
            value += -1
        }
    }
    for (let value of enemy1statuses) {
        if (value < 0) {
            value += -1
        }
    }
    for (let value of enemy1statuses) {
        if (value < 0) {
            value += -1
        }
    }
}
let which_enemy_attacking: Sprite = null
let counter = 0
let list_of_images: Image[] = []
let otherprojectile: Sprite = null
let boom: Sprite = null
let randomnum = 0
let flowerthingy: Sprite = null
let healerhealth: StatusBarSprite = null
let magehealth: StatusBarSprite = null
let warriorhealth: StatusBarSprite = null
let ghostmoves: number[] = []
let snakemoves: number[] = []
let kaijumoves: number[] = []
let batmoves: number[] = []
let enemykind3: Image[] = []
let enemykind2: Image[] = []
let placeholder1: Image[] = []
let placeholdersprite: Sprite = null
let moveimagecopy: Image = null
let literally_just_for_me_to_keep_track_of_statuses = 0
let status02 = 0
let enemy3statuses: number[] = []
let status01 = 0
let enemy2statuses: number[] = []
let status00 = 0
let enemy1statuses: number[] = []
let what_move_player_is_doing = 0
let status22 = 0
let status21 = 0
let status20 = 0
let move_set_open = false
let move_being_made = false
let enemymove = false
let enemyspecs: number[] = []
let enemykind1: Image[] = []
let crits: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
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
let list_of_player_hp_bars = [statusbar, statusbar3, statusbar2]
let flowerdmgincrease = 1
crits = statusbars.create(60, 4, StatusBarKind.Magic)
crits.value = 0
crits.max = 250
crits.setPosition(75, 4)
forever(function () {
    pause(1000)
    effects2()
})
