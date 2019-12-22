export default class Car {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 100;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight / 2 - this.height / 2
        };
    }

    draw(ctx) {
        ctx.fillStyle = "#000";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
