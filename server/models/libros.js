const mongoose = require('mongoose');

const { Schema } = mongoose;

const LibroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  isbn: { type: String, required: true },
  imagenPath: { type: String },
  creado_en: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Libro', LibroSchema);
