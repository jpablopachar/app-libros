import './styles/estilos.css';
import Interfaz from './interfaz.js'

const interfaz = new Interfaz();

// Se ejecuta cuando se inicia el DOM
document.addEventListener('DOMContentLoaded', () => {
  interfaz.renderLibros();
})

document.getElementById('form-libro').addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const isbn = document.getElementById('isbn').value;
  const imagen = document.getElementById('imagen').files;

  const formData = new FormData();

  formData.append('titulo', titulo);
  formData.append('autor', autor);
  formData.append('isbn', isbn);
  formData.append('imagen', imagen[0]);

  interfaz.agregarNuevoLibro(formData);
  interfaz.renderMensaje('Nuevo libro agregado', 'success', 3000);
});

// Captura todos los eventos click de cards-libros
document.getElementById('cards-libros').addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    interfaz.eliminarLibro(e.target.getAttribute('_id'));
    interfaz.renderMensaje('Libro eliminado', 'danger', 2000);
  }

  e.preventDefault();
});