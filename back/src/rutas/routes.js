
//Importamos la libreria para administrar las rutas:
const {Router} = require('express');

//Importamos las funciones desde Controles
const {AgregarPostDB, ListarPostDB} = require('../controles/functPost');

const router = Router();

router.get('/', (req, res)=> {
    res.send('Inicio !!');
}
);

router.get('/home', (req, res)=> {
    res.send('Hola mundo !!');
}
);

//Manejo de rutas por medio de funciones que admninistran el (req, res)

router.post('/posts', AgregarPostDB);

router.get('/posts', ListarPostDB);

module.exports = router;