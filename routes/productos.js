const router = require('express').Router();

const {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
} = require('../controllers/productos');

// localhost:4001/v1/productos

router.get('/', obtenerProductos);
// router.get('/:cat', obtenerProductosPorCat);
router.post('/', crearProducto);
router.put('/:id', modificarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;