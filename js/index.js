import Car from "/js/car";

// Canvas
const bodyUI = document.querySelector("body");
const canvasUI = document.createElement("canvas");
bodyUI.appendChild(canvasUI);
canvasUI.id = "can";
console.log(canvasUI);
canvasUI.width = document.body.clientWidth;
canvasUI.height = document.body.clientHeight;
let gameWidth = canvasUI.width;
let gameHeight = canvasUI.height;
canvasUI.style.border = "1px solid #000";

const ctx = canvasUI.getContext("2d");

ctx.clearRect(0, 0, gameWidth, gameHeight);

let ford = new Car(gameWidth, gameHeight, 150, 100, "black");
ford.draw(ctx, "red");
let citroen = new Car(40, 40, 50, 20, "red");
citroen.draw(ctx, "black");
