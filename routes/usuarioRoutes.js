const express = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuarioControlles');

router.get('/',usuarioControllers.getAns);
router.get('/suma',usuarioControllers.getSuma);
router.get('/usuarios/:user',usuarioControllers.getName);
router.get('/swapi/:number',usuarioControllers.getName);
router.put('/body',usuarioControllers.putUser);
router.post('/sumaMod',usuarioControllers.postSumamod);
router.delete('/idRemover/:id',usuarioControllers.deleteId);
module.exports = router;
