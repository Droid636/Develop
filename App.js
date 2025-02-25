const express = require('express');
const app = express();
const port = 5000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.use(express.static('public')); // Carpeta para archivos estáticos como CSS e imágenes

// Ruta principal
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
