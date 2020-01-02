export default class Car {
  constructor(gameWidth, gameHeight, carWidth, carHeight) {
    this.width = carWidth;
    this.height = carHeight;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2
    };
  }

  draw(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
