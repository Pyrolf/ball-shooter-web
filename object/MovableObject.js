class MovableObject extends Object {
    constructor(position, radius, color, velocity) {
        super(position, radius, color)
        this.velocity = velocity
    }

    update() {
        this.draw()
        this.position.add(this.velocity)
    }
}