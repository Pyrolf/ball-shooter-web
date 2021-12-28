class XY {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    set(xy) {
        this.x = xy.x
        this.y = xy.y
    }

    add(xy) {
        this.x += xy.x
        this.y += xy.y
    }
}