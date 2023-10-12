const express = require('express') 

//crear el objeto principal de la api
const app = express()

//url de la prueba
//definiendo una ruta de get
app.get('/prueba' , function(request , response ){response.send("hola❤️")})

app.get('/prueba2' , (request , response) =>{
    response.status(200) 
            .json({"succes" : true})
})

//crear el servidor de aplicacion:
//5000 es el puerto donde se va a ejecutar
app.listen(5000 ,
    console.log( 'servidor ejecutando en puerto ' + 5000))