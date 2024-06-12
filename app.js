const express = require("express")
const app = express()
const port = 3500


app.get("/", (req, res)=>{
    res.json({Mensaje: "Aplicación funcionando correctamente"})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})