const router = require('express').Router();
const { unlink } = require('fs-extra');

const path = require('path');

const Libro = require('../models/libros');

router.get('/', async (req, res) => {
  const libros = await Libro.find();

  res.json(libros);
});

router.post('/', async (req, res) => {
  const { titulo, autor, isbn } = req.body;
  const imagenPath = '/uploads/' + req.file.filename;
  const nuevoLibro = new Libro({ titulo, autor, isbn, imagenPath });

  await nuevoLibro.save();
  res.json({ mensaje: "Libro guardado" });
});

router.delete('/:id', async (req, res) => {
  const libro = await Libro.findByIdAndDelete(req.params.id);

  unlink(path.resolve('./server/public' + libro.imagenPath));
  res.json({ mensaje: "Libro eliminado" });
});

module.exports = router;
