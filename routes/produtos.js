const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send('Rota principal')
})

router.get('/usuarios',(req, res) => {
    res.send('Aqui vão ser os usuarios')
})

module.exports = router