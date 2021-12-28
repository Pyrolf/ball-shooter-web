class EnemySystem {
    #enemies
    #interval

    init() {
        this.#enemies = []
        if (this.#interval !== null) {
            clearInterval(this.#interval)
        }
        this.#spawnEnemies()
    }

    #spawnEnemies() {
        this.#interval = setInterval(() => {
            const radius = Math.random() * (EnemyConfig.MAX_RADIUS - ProjectileConfig.INITIAL_RADIUS) + ProjectileConfig.INITIAL_RADIUS
            const position = this.#randomSpawnPosition(radius)
            const angle = Math.atan2(player.position.y - position.y, player.position.x - position.x)

            this.#enemies.push(new Enemy(
                position,
                radius,
                'hsl(' + Math.random() * 360 + ', 50%, 50%)',
                new XY(
                    Math.cos(angle),
                    Math.sin(angle)
                )
            ))
        }, 1000)
    }

    #randomSpawnPosition(radius) {
        if (Math.random() < 0.5) {
            return new XY(
                Math.random() < .5 ? 0 - radius : canvas.width + radius,
                Math.random() * canvas.height
            )
        }
        return new XY(
            Math.random() * canvas.width,
            Math.random() < .5 ? 0 - radius : canvas.height + radius
        )
    }

    update() {
        this.#enemies.forEach((enemy, index) => {
            enemy.update()

            if (enemy.isCollided(player)) {
                gameOver()
            }

            if (projectileSystem.detectCollision(enemy)) {
                let score = SCORE_POINT.DAMAGE
                if (enemy.isDead(10)) {
                    score = SCORE_POINT.KILL
                    this.#removeEnemy(index);
                }
                scoreSystem.addScore(score)
            }
        })
    }

    #removeEnemy(index) {
        setTimeout(() => {
            this.#enemies.splice(index, 1)
        }, 0)
    }
}