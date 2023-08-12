/// Obtener referencias a los elementos del formulario y las listas
const productoForm = document.getElementById('producto-form');
const servicioForm = document.getElementById('servicio-form');
const productosList = document.getElementById('productos-list');
const serviciosList = document.getElementById('servicios-list');

// Cargar productos y servicios desde el almacenamiento local (si existen)
let productos = JSON.parse(localStorage.getItem('productos')) || [];
let servicios = JSON.parse(localStorage.getItem('servicios')) || [];

// Función para mostrar productos y servicios en las listas
function mostrarProductos() {
  productosList.innerHTML = '';
  productos.forEach((producto, index) => {
    productosList.innerHTML += `
      <div>
        <strong>${producto.nombre}</strong> (${producto.marca})
        <p>${producto.descripcion}</p>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      </div>
    `;
  });
}

function mostrarServicios() {
  serviciosList.innerHTML = '';
  servicios.forEach((servicio, index) => {
    serviciosList.innerHTML += `
      <div>
        <strong>${servicio.nombre}</strong> (${servicio.marca} ${servicio.modelo}, ${servicio.anio})
        <button onclick="eliminarServicio(${index})">Eliminar</button>
      </div>
    `;
  });
}

// Función para agregar un producto
function agregarProducto(nombre, marca, descripcion) {
  const producto = { nombre, marca, descripcion };
  productos.push(producto);
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
}

// Función para agregar un servicio
function agregarServicio(nombre, marca, modelo, anio) {
  const servicio = { nombre, marca, modelo, anio };
  servicios.push(servicio);
  localStorage.setItem('servicios', JSON.stringify(servicios));
  mostrarServicios();
}

// Función para eliminar un producto
function eliminarProducto(index) {
  productos.splice(index, 1);
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
}

// Función para eliminar un servicio
function eliminarServicio(index) {
  servicios.splice(index, 1);
  localStorage.setItem('servicios', JSON.stringify(servicios));
  mostrarServicios();
}
