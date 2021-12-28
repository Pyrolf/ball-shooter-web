class Player extends MovableObject {
    #isUp
    #isDown
    #isLeft
    #isRight

    constructor(position, radius, color, velocity) {
        super(position, radius, color, velocity)
        this.#isUp = false
        this.#isDown = false
        this.#isLeft = false
        this.#isRight = false
    }

    update() {
        super.update()
        this.#stayWithinBoundaries() 
        this.#reduceVelocity() 
    }

    #stayWithinBoundaries() {
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius
        } else if (this.position.x + this.radius > canvas.width) {
            this.position.x = canvas.width - this.radius
        }

        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius
        } else if (this.position.y + this.radius > canvas.height) {
            this.position.y = canvas.height - this.radius
        } 
    }

    #reduceVelocity() {
        if (!this.#isUp && !this.#isDown) {
            this.velocity.y *= PlayerConfig.FRICTION
            if (this.velocity.y > -PlayerConfig.RESET_VELOCITY_OFFSET && this.velocity.y < PlayerConfig.RESET_VELOCITY_OFFSET) {
                this.velocity.y = 0
            }
        }
        if (!this.#isLeft && !this.#isRight) {
            this.velocity.x *= PlayerConfig.FRICTION
            if (this.velocity.x > -PlayerConfig.RESET_VELOCITY_OFFSET && this.velocity.x < PlayerConfig.RESET_VELOCITY_OFFSET) {
                this.velocity.x = 0
            }
        }
    }

    move(movementDirection) {
        switch (movementDirection) {
            case DIRECTION.UP:
                this.velocity.y = -PlayerConfig.MOVE_VELOCITY
                this.#isUp = true
                break;
            case DIRECTION.DOWN:
                this.velocity.y = PlayerConfig.MOVE_VELOCITY
                this.#isDown = true
                break;
            case DIRECTION.LEFT:
                this.velocity.x = -PlayerConfig.MOVE_VELOCITY
                this.#isLeft = true
                break;
            case DIRECTION.RIGHT:
                this.velocity.x = PlayerConfig.MOVE_VELOCITY
                this.#isRight = true
                break;
        }
    }

    stop(movementDirection) {
        switch (movementDirection) {
            case DIRECTION.UP:
                if (this.#isDown) {
                    this.velocity.y = PlayerConfig.MOVE_VELOCITY
                }
                this.#isUp = false
                break;
            case DIRECTION.DOWN:
                if (this.#isUp) {
                    this.velocity.y = -PlayerConfig.MOVE_VELOCITY
                }
                this.#isDown = false
                break;
            case DIRECTION.LEFT:
                if (this.#isRight) {
                    this.velocity.x = PlayerConfig.MOVE_VELOCITY
                }
                this.#isLeft = false
                break;
            case DIRECTION.RIGHT:
                if (this.#isLeft) {
                    this.velocity.x = -PlayerConfig.MOVE_VELOCITY
                }
                this.#isRight = false
                break;
        }
    }
}