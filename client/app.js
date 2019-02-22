import './styles/estilos.css';
import LibroService from './services/LibroService';

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

  const libroService = new LibroService();

  libroService.guardarLibro(formData);

  libroService.postLibros();
});