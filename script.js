const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//Importando las rutas
const usuarioRoutes = require('./routes/usuarioRoutes');

// CRUD
// C -> Create -> HTTP POST
// R -> Read   -> HTTP GET
// U -> Update -> HTTP PUT / HTTP PATCH
// D -> Delete -> HTTP DELETE

app.use('/api', usuarioRoutes);


app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});
