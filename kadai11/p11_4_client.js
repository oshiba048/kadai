const socket = io("http://172.16.3.15:33333");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const box = document.getElementsByClassName("box")[0];

window.onmousemove = e => {
    socket.emit("move", {
        id : socket.id,
         x : e.clientX,
         y : e.clientY
    });
}

socket.on("entry", (data) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = data;
    box.style.top = "100px";
    box.style.left = "100px";
    document.body.append(box);
    
    if(socket.id != data){
        const myBox = document.getElementById(socket.id);
        socket.emit("sync", {
            id : socket.id,
            x : myBox.style.left,
            y : myBox.style.top
        });
    }
});

socket.on("sync", (data) => {
   let box = document.getElementById(data.id);
   console.log(box);
   if(!box){
       box = document.createElement("div");
       box.classList.add("box");
       box.id = data.id;
       box.style.top = data.y;
       box.style.left = data.x;
       document.body.append(box);
   }
});

socket.on("move", (data) => {
    const box = document.getElementById(data.id);
    box.style.left = data.x + "px";
    box.style.top = data.y + "px";   
});

socket.on("exit", (data) => {
    const box = document.getElementById(data.id);
    box.remove();
});