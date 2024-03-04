const express = require('express');
const router = express.Router();

//Ruta de contacto
router.get('/login', async (req, res) => {
    res.render('./app/login', { titulo: 'Inicio de sesión' });
});

module.exports = router; //Exporto las rutas para usarlas en otros archivos JS