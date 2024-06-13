const express = require("express")
const app = express()
const port = 3500
const comidaRoutes = require('./routes/comidaRoutes')
const morgan = require("morgan")

app.use(express. urlencoded({extended:false}));
app.use(express.json());

app.use(morgan('dev'));



app.use('/API', comidaRoutes);


app.use((req,res)=>{
    res.status(404).json({message: 'Ruta no encontrado'})
});


app.get("/", (req, res)=>{
    res.json({Mensaje: "Aplicación funcionando correctamente"})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})