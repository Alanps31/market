const express = require('express');

const app = express();

const produtoRoutes = require('./routes/produtos')

const serverPort = 8000;

app.use('/static',express.static('public'))

app.use(produtoRoutes)

app.listen(serverPort,(err)=> {
    if(err) {
        console.log("Impossível conectar no servidor BAD REQUEST");
    }else {
        console.log("Conectado");
    }
})