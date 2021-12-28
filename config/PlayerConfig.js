class PlayerConfig {
    static FRICTION = 0.9
    static RESET_VELOCITY_OFFSET = 0.05
    static MOVE_VELOCITY = 3

    static INITIAL_POSITION
    static INITIAL_RADIUS = 10
    static INITIAL_COLOR = 'white'

    static init() {
        PlayerConfig.INITIAL_POSITION = new XY(
            canvas.width / 2,
            canvas.height / 2
        )
    }
}
