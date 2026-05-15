# Evaluación 2.6: Web Scraping con Cheerio y Node.js

## Objetivo del Proyecto
Implementar una solución backend con Node.js y Express para extraer información estructurada 
(Web Scraping) desde una página web externa usando la librería Cheerio, 
aplicando una arquitectura de software en capas (Routes, Controllers, Services).

## Instalación y Configuración
1. Descargar el repositorio en tu equipo.
2. Abrir la terminal en la carpeta raíz del proyecto.
3. Ejecutar el comando para instalar las dependencias: `npm install`

## Instrucciones de Ejecución
1. En la terminal, inicia el servidor con: `node index.js`
2. La consola confirmará que el servidor está activo en el puerto 3000.

## Endpoint y Ejemplo de Uso
- **Método:** GET
- **Ruta:** `/scrape`
- **URL Local:** `http://localhost:3000/scrape`

**Ejemplo de Respuesta JSON:**
```json
{
  "success": true,
  "total_libros": 20,
  "resultados": [
    {
      "titulo": "A Light in the Attic",
      "precio": "£51.77",
      "stock": "In stock"
    }
  ]
}


Selectores CSS Utilizados
La información se extrajo de http://books.toscrape.com/ usando:

article.product_pod: Identificador principal para aislar y recorrer cada producto.

h3 a: Acceso al atributo title para obtener el nombre completo del libro.

.price_color: Extracción del precio del libro.

.instock.availability: Identificación del estado actual del inventario.

