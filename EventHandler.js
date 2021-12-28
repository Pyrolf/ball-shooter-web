const startGameBtn = document.querySelector('#startGameBtn')

addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW':
            player.move(DIRECTION.UP)
            break;
        case 'KeyS':
            player.move(DIRECTION.DOWN)
            break;
        case 'KeyA':
            player.move(DIRECTION.LEFT)
            break;
        case 'KeyD':
            player.move(DIRECTION.RIGHT)
            break;
    }
});

addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW':
            player.stop(DIRECTION.UP)
            break;
        case 'KeyS':
            player.stop(DIRECTION.DOWN)
            break;
        case 'KeyA':
            player.stop(DIRECTION.LEFT)
            break;
        case 'KeyD':
            player.stop(DIRECTION.RIGHT)
            break;
    }
});

addEventListener('click', (event) => {
    if (gameStart) {
        projectileSystem.spawnProjectile(player.position, new XY(
            event.clientX,
            event.clientY
        ))
    }
});

startGameBtn.addEventListener('click', () => {
    init()
})