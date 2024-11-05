const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');
const bodyParser = require('body-parser'); // Asegúrate de requerir body-parser

// Creamos la variable APP
const app = express();
const port = process.env.PORT || 5000;

// Conexión a bases de datos
conectarBD();
app.use(cors());

// Middleware para parsear solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para consumir la API Cliente y Bicicleta
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/bicicletas', require('../routes/rutasBicicletas'));

// Ruta para verificar nuestro servidor en la web
app.get('/', (req, res) => {
    res.send("Hola, estamos conectados desde la web");  
});  

// Ruta de nuestro servidor local
app.listen(port, () => {  
    console.log("El servidor está conectado http://localhost:5000/");  
});
