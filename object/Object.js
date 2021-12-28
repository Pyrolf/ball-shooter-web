class Object {
    constructor(position, radius, color) {
        this.position = position
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    isCollided(object) {
        if (Math.hypot(this.position.x - object.position.x, this.position.y - object.position.y) - object.radius - this.radius < ObjectConfig.COLLISION_OFFSET) {
            return true
        }
        return false
    }
}