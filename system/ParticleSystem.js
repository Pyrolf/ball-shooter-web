class ParticleSystem {
    #particles

    init() {
        this.#particles = []
    }

    spawnParticles(quantity, position, color) {
        for (let i = 0; i < quantity; i++) {
            this.#particles.push(new Particle(
                new XY(
                    position.x,
                    position.y
                ),
                Math.random() * ParticleConfig.MAX_RADIUS,
                color,
                new XY(
                    this.#randomVelocity(),
                    this.#randomVelocity()
                )
            ))
        }
    }

    #randomVelocity() {
        return Math.random() - ParticleConfig.NEGATIVE_RANDOM_OFFSET * (Math.random() * ParticleConfig.MAX_VELOCITY)
    }

    update() {
        this.#particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                this.#particles.splice(index, 1)
            } else {
                particle.update()
            }
        })
    }
}