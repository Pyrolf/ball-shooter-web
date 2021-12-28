const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');
canvas.width = innerWidth
canvas.height = innerHeight

const scoreSystem = new ScoreSystem()
const particleSystem = new ParticleSystem()
const projectileSystem = new ProjectileSystem()
const enemySystem = new EnemySystem()

let player
let animationId
let gameStart = false

PlayerConfig.init()

function init() {
    setTimeout(() => {
        gameStart = true
    }, 1)

    player = new Player(
        new XY(
            PlayerConfig.INITIAL_POSITION.x,
            PlayerConfig.INITIAL_POSITION.y
        ),
        PlayerConfig.INITIAL_RADIUS,
        PlayerConfig.INITIAL_COLOR,
        new XY(
            0,
            0
        )
    )
    projectileSystem.init()
    enemySystem.init()
    particleSystem.init()
    scoreSystem.init()

    animate()
}

function animate() {
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    particleSystem.update()
    projectileSystem.update()
    enemySystem.update()
}

function gameOver() {
    gameStart = false

    scoreSystem.gameOver()

    cancelAnimationFrame(animationId)
}