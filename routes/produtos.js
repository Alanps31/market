const express = require('express');
const paths = require('../pathsApp')
const router = express.Router();


router.get('/',(req,res) => {
    res.sendFile(paths.views + "\\login.html")
})

router.get('/usuarios',(req, res) => {
    res.send('Aqui vão ser os usuarios')
})

module.exports = router