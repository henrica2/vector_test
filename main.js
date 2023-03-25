import { Vector2 } from "./Vector.js"

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    xPos: null,
    yPos: null
}

window.addEventListener("mousemove", function(event) {
    mouse.xPos = event.clientX
    mouse.yPos = event.clientY
});

const c = canvas.getContext("2d");

const origin = new Vector2(innerWidth / 2, innerHeight / 2);

// Testing different draws
// function drawCircle(Vector2) {
//     c.beginPath();
//     c.arc(Vector2.x, Vector2.y, 30, 0, Math.PI * 2, false);
//     c.stroke();
//     c.fillStyle = 'grey';
//     c.fill();
// }

function drawLine(origin, destination) {
    c.beginPath();
    c.moveTo(origin.x, origin.y);
    c.lineTo(destination.x, destination.y);
    c.stroke();
}

function updateLine() {
    requestAnimationFrame(updateLine);
    // let x = Math.random() * canvas.width;
    // let y = Math.random() * canvas.height;
    let x = mouse.xPos;
    let y = mouse.yPos;
    let pos = new Vector2(x, y);
    let v = Vector2.subVector2(pos, origin);
    // v.setMag(200);
    v.add(origin);
    drawLine(origin, v);
}

updateLine();
