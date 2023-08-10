// Creamos un array para la lista de servicios 

let listaservicios = [];

const objServicio = {
    id: '',
    servicio: '',
    marca: '',
    modelo: '',
    Año: ''
}

// Let variable que nos va permitir cuando tenemos que agregar información
let editando = false;

const formulario = document.querySelector('#formulario');
const servicioInput = document.querySelector('#servicio');
const marcaInput = document.querySelector('#marca');
const modeloInput = document.querySelector('#modelo');
const añoInput = document.querySelector('#año');
const btnAgregarInput = document.querySelector('#btnAgregar');

// Creación de función cuando detecte el sumbit para validar formulario
formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
    e.preventDefault();

    if(servicioInput.value === '' || marcaInput.value === ''|| modeloInput.value === '' || añoInput.value === ''  ) {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarServicio();
        editando = false;
    } else {
        objServicio.id = Date.now();
        objServicio.servicio = servicioInput.value;
        objServicio.marca = marcaInput.value;
        objServicio.modelo = modeloInput.value;
        objServicio.año = añoInput.value;

        agregarEmpleado();
    }
}
