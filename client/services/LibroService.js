class LibroService {
  constructor() {
    this.URI = 'http://localhost:3000/api/libros';
  }

  // Obtener los libros
  async obtenerLibros() {
    const respuesta = await fetch(this.URI);
    const libros = await respuesta.json();

    return libros;
  }

  // Guardar un libro
  async guardarLibro(libro) {
    const respuesta = await fetch(this.URI, {
      method: 'POST',
      body: libro
    });

    const dato = await respuesta.json();

    console.log(dato);
  }

  // Eliminar un libro
  async eliminarLibro(idLibro) {
    const respuesta = await fetch(`${this.URI}/${idLibro}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE'
    });

    const dato = await respuesta.json();

    console.log(dato);
  }
}

export default LibroService;