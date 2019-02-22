import { format } from 'timeago.js';

import LibroService from './services/LibroService.js';

const libroService = new LibroService();

class Interfaz {
  async renderLibros() {
    const libros = await libroService.obtenerLibros();
    const cardsLibrosContainer = document.getElementById('cards-libros');

    cardsLibrosContainer.innerHTML = '';
    libros.forEach((libro) => {
      const div = document.createElement('div');

      div.className = '';
      div.innerHTML = `
        <div class="card m-2">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="http://localhost:3000${libro.imagenPath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-block px-2">
                <h4 class="card-title">${libro.titulo}</h4>
                <p class="card-text">${libro.autor}</p>
                <a href="#" class="btn btn-danger eliminar" _id="${libro._id}"><i class="far fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
          <div class="card-footer w-100 text-muted">${format(libro.creado_en)}</div>
        </div>
      `;

      cardsLibrosContainer.appendChild(div);
    })
  }

  async agregarNuevoLibro(libro) {
    await libroService.guardarLibro(libro);
    this.limpiarFormLibro();
    this.renderLibros();
  }

  limpiarFormLibro() {
    document.getElementById('form-libro').reset();
  }

  renderMensaje(mensaje, colorMensaje, tiempo) {
    const div = document.createElement('div');

    div.className = `alert alert-${colorMensaje} mensaje`;
    div.appendChild(document.createTextNode(mensaje));

    const container = document.querySelector('.col-md-4');
    const formLibro = document.getElementById('form-libro');

    container.insertBefore(div, formLibro);
    setTimeout(() => {
      document.querySelector('.mensaje').remove();
    }, tiempo);
  }

  async eliminarLibro(idLibro) {
    await libroService.eliminarLibro(idLibro);
    this.renderLibros();
  }
}

export default Interfaz;