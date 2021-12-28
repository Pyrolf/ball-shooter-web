class ProjectileSystem {
    #projectiles

    init() {
        this.#projectiles = []
    }

    spawnProjectile(spawnPosition, targetPosition) {
        const angle = Math.atan2(targetPosition.y - spawnPosition.y, targetPosition.x - spawnPosition.x)
        this.#projectiles.push(new Projectile(
            new XY(
                spawnPosition.x,
                spawnPosition.y
            ),
            ProjectileConfig.INITIAL_RADIUS,
            PlayerConfig.INITIAL_COLOR,
            new XY(
                Math.cos(angle) * ProjectileConfig.INITIAL_VELOCITY,
                Math.sin(angle) * ProjectileConfig.INITIAL_VELOCITY
            )
        ))
    }

    update() {
        this.#projectiles.forEach((projectile, index) => {
            projectile.update()
            if (projectile.isOutOfBoundaries(0, canvas.width, 0, canvas.height)) {
                this.#removeProjectile(index)
            }
        })
    }

    detectCollision(enemy) {
        for (let i = 0; i < this.#projectiles.length; i++) {
            const projectile = this.#projectiles[i]
            if (projectile.isCollided(enemy)) {
                this.#removeProjectile(i)
                particleSystem.spawnParticles(enemy.radius, projectile.position, enemy.color)
                return true
            }
        }
        return false
    }

    #removeProjectile(index) {
        setTimeout(() => {
            this.#projectiles.splice(index, 1)
        }, 0)
    }
}