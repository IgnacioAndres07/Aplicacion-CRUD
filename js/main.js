
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


// Envío de formularios submit
productoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('producto-nombre').value;
    const marca = document.getElementById('producto-marca').value;
    const descripcion = document.getElementById('producto-descripcion').value;
    agregarProducto(nombre, marca, descripcion);
    productoForm.reset();
});

servicioForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('servicio-nombre').value;
    const marca = document.getElementById('servicio-marca').value;
    const modelo = document.getElementById('servicio-modelo').value;
    const anio = document.getElementById('servicio-anio').value;
    agregarServicio(nombre, marca, modelo, anio);
    servicioForm.reset();
});

// Mostrar productos y servicios al cargar la página
mostrarProductos();
mostrarServicios();

// Función para editar un producto
function editarProducto(index, nombre, marca, descripcion) {
    productos[index] = { nombre, marca, descripcion };
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
}

// Función para editar un servicio
function editarServicio(index, nombre, marca, modelo, anio) {
    servicios[index] = { nombre, marca, modelo, anio };
    localStorage.setItem('servicios', JSON.stringify(servicios));
    mostrarServicios();
}

// Función para cargar los datos del producto/servicio a editar en el formulario
function cargarDatosParaEdicion(tipo, index) {
    if (tipo === 'producto') {
        const producto = productos[index];
        document.getElementById('producto-nombre').value = producto.nombre;
        document.getElementById('producto-marca').value = producto.marca;
        document.getElementById('producto-descripcion').value = producto.descripcion;
        document.getElementById('producto-form').onsubmit = function (event) {
            event.preventDefault();
            const nombre = document.getElementById('producto-nombre').value;
            const marca = document.getElementById('producto-marca').value;
            const descripcion = document.getElementById('producto-descripcion').value;
            editarProducto(index, nombre, marca, descripcion);
            productoForm.reset();
            document.getElementById('producto-form').onsubmit = null;
        };
    } else if (tipo === 'servicio') {
        const servicio = servicios[index];
        document.getElementById('servicio-nombre').value = servicio.nombre;
        document.getElementById('servicio-marca').value = servicio.marca;
        document.getElementById('servicio-modelo').value = servicio.modelo;
        document.getElementById('servicio-anio').value = servicio.anio;
        document.getElementById('servicio-form').onsubmit = function (event) {
            event.preventDefault();
            const nombre = document.getElementById('servicio-nombre').value;
            const marca = document.getElementById('servicio-marca').value;
            const modelo = document.getElementById('servicio-modelo').value;
            const anio = document.getElementById('servicio-anio').value;
            editarServicio(index, nombre, marca, modelo, anio);
            servicioForm.reset();
            document.getElementById('servicio-form').onsubmit = null;
        };
    }
}


// Función para mostrar productos y servicios al editar y eliminar 


function mostrarProductos() {
    productosList.innerHTML = '';
    productos.forEach((producto, index) => {
        productosList.innerHTML += `
        <div>
          <strong>${producto.nombre}</strong> (${producto.marca})
          <p>${producto.descripcion}</p>
          <button onclick="cargarDatosParaEdicion('producto', ${index})">Editar</button>
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
          <button onclick="cargarDatosParaEdicion('servicio', ${index})">Editar</button>
          <button onclick="eliminarServicio(${index})">Eliminar</button>
        </div>
      `;
    });
}
