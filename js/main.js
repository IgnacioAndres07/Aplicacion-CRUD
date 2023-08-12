// Creamos un array para la lista de servicios 

let listaServicios = [];

const objServicio = {
    id: '',
    servicio: '',
    marca: '',
    modelo: '',
    año: ''
}
// Let variable que nos va permitir cuando tenemos que agregar información
let editando = false;

const formulario = document.getElementById('#formulario');
const servicioInput = document.getElementById('#servicio');
const marcaInput = document.getElementById('#marca');
const modeloInput = document.getElementById('#modelo');
const añoInput = document.getElementById('#año');
const btnAgregarInput = document.getElementById('#btnAgregar');

// Creación de función cuando detecte el sumbit para validar formulario
formulario.addEventListener('submit', validarFormulario);
 
function validarFormulario(e) {
    e.preventDefault();

    if (servicioInput.value === '' || marcaInput.value === '' || modeloInput.value === '' || añoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if (editando) {
        editarServicio();
        editando = false;
    } else {
        objServicio.id = Date.now();
        objServicio.servicio = servicioInput.value;
        objServicio.marca = marcaInput.value;
        objServicio.modelo = modeloInput.value;
        objServicio.año = añoInput.value;

        agregarServicio();
    }
}

function agregarServicio() {
    listaServicios.push({...objServicio});

    mostrarServicios();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objServicio.id = '';
    objServicio.servicio = '';
    objServicio.marca = '';
    objServicio.modelo = '';
    objServicio.año = '';
}


function mostrarServicios() {

    limpiarHTML();

    const divServicios = document.querySelector('.div-servicios')

    listaServicios.forEach(servicio => {
        const {id, servicio, marca, modelo, año} = servicio;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${servicio} - ${marca} - ${modelo} - ${año} - `;
        parrafo.dataset.id = id;

        const editarBoton = documen.createElement('button');
        editarBoton.onclick = () => cargarServicio(servicio);  
        editarBoton.textContent = 'Editar';
        editarBoton.classLista.add('btn', 'btn-editar')
        parrafo.append(editarBoton);

        const eliminarBoton = documen.createElement('button');

        editarBoton.onclick = () => cargarServicio(serviciocotizado);  
        eliminarBoton.textContent = 'Editar';
        eliminarBoton.classLista.add('btn', 'btn-eliminar')
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divServicios.appendChild(parrafo);
        divServicios.appendChild(hr);
    });


}

function cargarServicio(servicio) {
    const {id, servicio, marca, modelo, año} = servicio;

    idInput.value = id;
    servicioInput.value = servicio;
    marcaInput.value = marca;
    modeloInput.value = modelo;
    añoInput.value = año;

    objServicio.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarServicio() {

    objServicio.servicio = servicioInput.value;
    objServicio.marca =  marcaInput.value;
    objServicio.modelo =  modeloInput.value;
    objServicio.año =  añoInput.value;


    listaServicios.map(servicio => {

        if(servicio.id === objServicio.id) {
            servicio.id = objServicio.id;
            servicio.servicio = objServicio.nombre;
            servicio.marca = objServicio.puesto;
            servicio.modelo = objServicio.puesto;
            servicio.año = objServicio.puesto;
        }

    });

    limpiarHTML();
    mostrarServicios();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Cotizar';
    
    editando = false;
}

function eliminarServicio(id) {

    listaServicios = listaServicios.filter(servicio => servicio.id !== id);

    limpiarHTML();
    mostrarServicios();
}

function limpiarHTML() {
    const divServicios = document.querySelector('.div-servicios');
    while(divServicios.firstChild) {
        divServicios.removeChild(divServicios.firstChild);
    }
}

