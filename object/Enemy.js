class Enemy extends MovableObject {
    isDead(damaged) {
        if (this.radius - damaged <= ProjectileConfig.INITIAL_RADIUS) {
            return true
        }
        gsap.to(this, {
            radius: this.radius - damaged
        })
        return false
    }
}