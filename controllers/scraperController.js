// Importamos el motor de scraping que hicimos en el commit 2 (scraperservice.js)
const scraperService = require('../services/scraperService');

async function getScrapedData(req, res) {
    try {
        // Validación 400 (Bad Request): Verificamos que el método sea estrictamente GET
        if (req.method !== 'GET') {
            return res.status(400).json({
                success: false,
                message: "Método no permitido. Utilice una petición GET."
            });
        }
        // Ejecutamos el servicio para obtener la lista de libros
        const data = await scraperService.obtenerLibros();

        // Validación básica: Si el arreglo viene vacío, enviamos un error 404 (No encontrado)
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Error...(No encontrado)."
            });
        }

        // Si todo sale bien, respondemos con código 200 (Éxito) y los datos estructurados
        return res.status(200).json({
            success: true,
            total_libros: data.length,
            resultados: data
        });

    } catch (error) {
        // Manejo de errores controlados: Error 500 (Falla en el servidor/red)
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            detalle: error.message
        });
    }
}

// Exportamos la función
module.exports = { getScrapedData };