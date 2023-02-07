const PORT = 3334;
const http = require("http");
const server = http.createServer();

server.listen(PORT, () =>{
    console.log("listen on " + PORT);
});

const io = require("socket.io")(server, {
    cors: {
        origin: "http://172.16.3.15:8888",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("connection", socket.id);
    io.emit("entry", socket.id);
    socket.on("move", function(data){
        console.log(data);
        io.emit("move", data);
    });
    socket.on("sync", function(data){
        console.log(data);
        io.emit("sync", data);
    });
    socket.on("disconnect", function(){
        console.log("disconnect");
    });
});