const axios = require('axios');
const cheerio = require('cheerio');

async function obtenerLibros() {
    try {
        // 1. Descargamos el HTML de la página objetivo
        const respuesta = await axios.get('http://books.toscrape.com/');
        const html = respuesta.data;

        // 2. Cargamos el HTML en Cheerio (es como si la consola leyera el DOM)
        const $ = cheerio.load(html);
        const librosExtraidos = [];

        // 3. Buscamos cada tarjeta de libro usando su selector CSS ('article.product_pod')
        $('article.product_pod').each((indice, elemento) => {
            
            // Extraemos los 3 datos requeridos por la pauta
            const titulo = $(elemento).find('h3 a').attr('title');
            const precio = $(elemento).find('.price_color').text();
            
            // Usamos .trim() para quitar los saltos de línea y espacios en blanco del HTML
            const stock = $(elemento).find('.instock.availability').text().trim();

            // Armamos un objeto limpio y lo empujamos a nuestra lista
            librosExtraidos.push({
                titulo: titulo,
                precio: precio,
                stock: stock
            });
        });

        return librosExtraidos;

    } catch (error) {
        // Manejo de errores de red 
        console.error("Error en el scraper:", error.message);
        throw new Error("Fallo al conectar con la página externa.");
    }
}

// Exportamos la función para que el controlador pueda usarla
module.exports = { obtenerLibros };