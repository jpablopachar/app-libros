if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');

const path = require('path');

require('./database');

const app = express();

/*                  Ajustes                     */
// Usa el puerto establecido o usa el puerto 3000
app.set('port', process.env.PORT || 3000);

/*                   Vistas                      */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*             Archivos Estáticos                */
app.use(express.static(path.join(__dirname, 'public')));

/*                 Middleware                   */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single('imagen'));

/*              Variables globales              */
/*app.use((req, res, next) => {
  app.locals.format = format;

  next();
});*/

/*                    Rutas                      */
app.use('/api/libros', require('./routes/libros'));

// Escucha en el puerto establecido
app.listen(app.get('port'), () => console.log(`Servidor en puerto ${app.get('port')}`));
