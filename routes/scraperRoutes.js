const express = require('express');
const router = express.Router();

// Importamos el controlador
const scraperController = require('../controllers/scraperController');

// Definimos que cuando alguien entre por el método GET a la ruta '/scrape', se ejecute el controlador
router.get('/scrape', scraperController.getScrapedData);

module.exports = router;