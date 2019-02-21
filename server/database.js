const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DBAppLibros', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(db => console.log('La base de datos está conectada')).catch(error => console.log(error));