const router = require('express').Router();

const Libro = require('../models/libros');

router.get('/', async (req, res) => {
  const libros = await Libro.find();

  res.json(libros);
});

router.post('/', async (req, res) => {
  const { titulo, autor, isbn } = req.body;
  const nuevoLibro = new Libro({ titulo, autor, isbn });

  await nuevoLibro.save();
  res.json({ mensaje: "Libro guardado" });
});

router.delete('/:id', async (req, res) => {
  await Libro.findByIdAndDelete(req.params.id);

  res.json({ mensaje: "Libro eliminado" });
})

module.exports = router;
