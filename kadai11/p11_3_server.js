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
    console.log("connection");
    io.emit("from server", "サーバからのメッセージ");
    socket.on("message", function(data){
        console.log(data);
        io.emit("message", data);
    });
    socket.on("disconnect", function(){
        console.log("disconnect");
    });
});