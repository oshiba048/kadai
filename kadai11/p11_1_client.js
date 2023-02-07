const socket = io("http://172.16.3.15:33333");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const box = document.getElementsByClassName("box")[0];

box.style.top = "100px";
box.style.left = "100px";

function emit(){
    socket.emit("message", this.id);
}

up.onclick = emit;
down.onclick = emit;
right.onclick = emit;
left.onclick = emit;

socket.on("message", (data) => {
    let x = parseInt(box.style.left);
    let y = parseInt(box.style.top);
    
    switch(data){
        case "up"   : y -= 10; break;
        case "down" : y += 10; break;
        case "right": x += 10; break;
        case "left" : x -= 10; break;
    }
    box.style.left = x + "px";
    box.style.top = y + "px";
    
});