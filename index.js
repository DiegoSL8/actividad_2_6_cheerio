const express = require('express');
const app = express();
const PORT = 3000;

// Importamos las rutas que creamos en la fase anterior
const scraperRoutes = require('./routes/scraperRoutes');

// Configuramos Express para que entienda formato JSON (buena práctica)
app.use(express.json());

// Le decimos a nuestra app que utilice las rutas importadas
app.use('/', scraperRoutes);

// Creamos una ruta base de bienvenida solo para confirmar que funciona
app.get('/', (req, res) => {
    res.send('Servidor activo...');
});

// Encendemos el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo sin errores`);
});