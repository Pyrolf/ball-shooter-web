class ScoreSystem {
    #score
    #scoreEl
    #modalEl
    #bigScoreEl


    constructor() {
        this.#scoreEl = document.querySelector('#scoreEl')
        this.#modalEl = document.querySelector('#modalEl')
        this.#bigScoreEl = document.querySelector('#bigScoreEl')
    }

    init() {
        this.#score = 0
        this.#scoreEl.innerHTML = this.#score
        this.#bigScoreEl.innerHTML = this.#score

        this.#modalEl.style.display = 'none'
    }

    gameOver() {
        this.#modalEl.style.display = 'flex'
        this.#bigScoreEl.innerHTML = this.#score
    }

    addScore(score) {
        this.#score += score
        this.#scoreEl.innerHTML = this.#score
    }
}