'use strict'
//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const tipo = document.querySelector('#tipo');
const rin = document.querySelector('#rin');
const color = document.querySelector('#color');
const frenos = document.querySelector('#frenos');
const cuadro = document.querySelector('#cuadro');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    tipo: '',
    rin: '',
    color: '',
    frenos: '',
    cuadro: '',
    minimo: '',
    maximo: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarBicicletas(bicicletas);
    mostrarYear();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarBicicleta();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarBicicleta();
});

tipo.addEventListener('change', e => {
    datosBusqueda.tipo = e.target.value;
    filtrarBicicleta();
});

rin.addEventListener('change', e => {
    datosBusqueda.rin = e.target.value;

    filtrarBicicleta();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarBicicleta();
});

frenos.addEventListener('change', e => {
    datosBusqueda.frenos = e.target.value;
    filtrarBicicleta();
});

cuadro.addEventListener('change', e => {
    datosBusqueda.cuadro = e.target.value;
    filtrarBicicleta();

});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarBicicleta();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarBicicleta();
});


//Funciones
function mostrarBicicletas(bicicletas) {

    limpiarHTML();

    bicicletas.forEach(bicicleta => {

        const { marca, year, tipo, rin, color, frenos, cuadro, precio } = bicicleta;
        const bicicletaHTML = document.createElement('ul');
        bicicletaHTML.classList.add('resultado__text');

        bicicletaHTML.innerHTML = `
        <li><span>Marca:</span> ${marca} </li>
        <li><span>Year:</span> ${year} </li>
        <li><span>Tipo:</span> ${tipo} </li>
        <li><span>Rin:</span> ${rin} </li>
        <li><span>Color:</span> ${color} </li>
        <li><span>Frenos:</span> ${frenos} </li>
        <li><span>Cuadro:</span> ${cuadro} </li>
        <li><span>Precio:</span> ${precio} <li>  
        `
        //insertar en el html
        resultado.appendChild(bicicletaHTML);
    });
};

//Borrar resultados anteriores
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarYear() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    };
};


function filtrarBicicleta() {
    const resultado = bicicletas.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarTipo).filter(filtrarRin).filter(filtrarColor).filter(filtrarFrenos).filter(filtrarCuadro);


    if (resultado.length) {
        mostrarBicicletas(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'Sin resultados, intenta nuevamente con una selección diferente';
    resultado.appendChild(noResultado);

}

function filtrarMarca(bicicleta) {
    const { marca } = datosBusqueda;
    if (marca) {
        return bicicleta.marca === marca;
    }
    return bicicleta;
}

function filtrarYear(bicicleta) {
    const { year } = datosBusqueda;
    if (year) {
        return bicicleta.year === year;
    }
    return bicicleta;
}

function filtrarMinimo(bicicleta) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return bicicleta.precio >= minimo;
    }
    return bicicleta;
}

function filtrarMaximo(bicicleta) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return bicicleta.precio <= maximo;
    }
    return bicicleta;
}

function filtrarTipo(bicicleta) {
    const { tipo } = datosBusqueda;
    if (tipo) {
        return bicicleta.tipo === tipo;
    }
    return bicicleta;
}

function filtrarRin(bicicleta) {
    const { rin } = datosBusqueda;
    if (rin) {
        return bicicleta.rin === rin;
    }
    return bicicleta;
}

function filtrarColor(bicicleta) {
    const { color } = datosBusqueda;
    if (color) {
        return bicicleta.color === color;
    }
    return bicicleta;
}

function filtrarFrenos(bicicleta) {
    const { frenos } = datosBusqueda;
    if (frenos) {
        return bicicleta.frenos === frenos;
    }
    return bicicleta;
}
function filtrarCuadro(bicicleta) {
    const { cuadro } = datosBusqueda;
    if (cuadro) {
        return bicicleta.cuadro === cuadro;
    }
    return bicicleta;
}

