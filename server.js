const express = require('express');

const app = express();

const produtoRoutes = require('./routes/produtos')

const serverPort = process.env.PORT;

app.use('/static',express.static('public'))

app.use(produtoRoutes)

app.listen(serverPort || 8000,(err)=> {
    if(err) {
        console.log("Impossível conectar no servidor BAD REQUEST");
    }else {
        console.log("Conectado");
    }
})