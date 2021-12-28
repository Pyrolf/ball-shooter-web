class Particle extends MovableObjectWithAlpha {
    constructor(position, radius, color, velocity) {
        super(position, radius, color, velocity)
        this.alpha = ParticleConfig.INITIAL_ALPHA
    }

    update() {
        super.update()
        this.velocity.x *= ParticleConfig.FRICTION
        this.velocity.y *= ParticleConfig.FRICTION
        this.alpha -= ParticleConfig.FADE_RATE
    }
}