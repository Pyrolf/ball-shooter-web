class MovableObjectWithAlpha extends MovableObject {
    draw() {
        c.save()
        c.globalAlpha = this.alpha
        super.draw()
        c.restore()
    }
}