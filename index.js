const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

app.get('/', (requisicao, resposta)=>{
    resposta.sendFile(__dirname+"/index.html")
})


io.on('connection', (socket) => {
    console.log("Conexao ID:",socket.id);
})


setInterval(() => {
    io.emit('cotacao', (Math.random()*10).toFixed(2))
}, 1000);

server.listen(3000,()=>{
    console.log("Ouvindo na porta 3000");
})