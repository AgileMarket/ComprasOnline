/*configuraciones*/
/*En esta parte se invoca la libreria*/ 
const express = require("express")
/*Llamando lo que declaramos en el express*/
const app = express()
/*Levantar el servidor*/
/*Determinar el cual va hacer el port*/
app.set("port", 8082)
app.get("/",(req, res)=>{
    res.send("Hola compas")
}) 
app.listen(app.get("port"),()=>{
    /*Imprime mensaje*/
    console.log(`Aplicacion corriendo en el puerto ${app.get("port")}`);
})
/*Funcion => flecha (para avisar que se conecto el servidor)*/
