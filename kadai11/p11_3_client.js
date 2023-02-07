const socket = io("http://172.16.3.15:33333");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const box = document.getElementsByClassName("box")[0];

box.style.top = "100px";
box.style.left = "100px";

window.onmousemove = e => {
    console.log("x: " + e.clientX);
    console.log("y: " + e.clientY);
    socket.emit("message", {
        x : e.clientX,
        y : e.clientY
    });
}
socket.on("message", (data) => {
    box.style.left = data.x + "px";
    box.style.top = data.y + "px";   
});