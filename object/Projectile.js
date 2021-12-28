class Projectile extends MovableObject {
    isOutOfBoundaries(left, right, top, bottom) {
        return this.position.x + this.radius < left ||
            this.position.x - this.radius > right ||
            this.position.y + this.radius < top ||
            this.position.y - this.radius > bottom
    }
}