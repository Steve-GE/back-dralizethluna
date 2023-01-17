const express = require('express');
const cors = require('cors');
const path = require('path');

 require('./db/conexion');
require('dotenv').config();

// console.log(process.env);

// Crear el servidor/aplicación de express
const app = express();

// Base de Datos
// dbConnection();

// Directorio publico
app.use( express.static('public'));

// CORS
app.use( cors() );

// Lectura y parseo del body.
app.use( express.json());

// Rutas
app.use( '/api', require('./routes/routes') );

//  Manejar de mas rutas.
app.get('/', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
});
