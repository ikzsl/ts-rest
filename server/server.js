import http from "http"; 

const server = http.createServer((req, res) => {
     res.write(`<h1 style="color:red">Hello, world</h1>`);
     console.log("client refresh");
     res.end();
});

const port = 8000;
server.listen(port, () => {
     console.log("server has been started");
});