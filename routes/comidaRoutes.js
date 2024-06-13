const express = require('express');
const Router = express.Router();

Router.get('/comida', (req,res)=>{
    return res.json({mensaje: "Si cargo la comida"})
})

module.exports=Router