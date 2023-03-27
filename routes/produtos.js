const express = require('express');
const paths = require('../pathsApp')
const router = express.Router();


router.get('/',(req,res) => {
    res.send("Hello There")
})

router.get('/usuarios',(req, res) => {
    res.send('Aqui vão ser os usuarios')
})

module.exports = router