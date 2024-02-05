import {prop_ventas} from './prop_ventas.js'
console.log(prop_ventas)
import prop_alquiler from './prop_alquiler.js'
// console.log(prop_alquiler)

function createArchiveprop(propiedad) {
    // console.log(propiedad)
    const permitirMascotas = propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'
    const permitirFumar = propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar' 

    const archivo = document.createElement('div')
    archivo.classList.add('col-md-4', 'col-mb-4')
    archivo.innerHTML = `
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${permitirFumar}
                </p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${permitirMascotas}
                </p>
            </div>
        </div>
    `; 
    return archivo
}

function showIndex(propiedades, tipo, limite) {
    // console.log(propiedades, tipo, limite)
    console.log(propiedades.length)
    const lista = document.getElementById(`propiedades-${tipo}-lista`);
    if(limite){
        for (let i = 0; i < 3 ; i++) {
            const propiedad = propiedades[i];
            const elementoPropiedad = createArchiveprop(propiedad);
            // console.log(elementoPropiedad)
            lista.appendChild(elementoPropiedad);
        }
    }else {
        for (let i = 0; i < propiedades.length ; i++) {
            const propiedad = propiedades[i];
            const elementoPropiedad = createArchiveprop(propiedad);
            // console.log(elementoPropiedad)
            lista.appendChild(elementoPropiedad);
        }
    }
    
}

const vistaActual = document.querySelector('main').id
// console.log(vistaActual)

if(vistaActual === 'index-view'){

    showIndex(prop_ventas, 'venta', true)
    showIndex(prop_alquiler, 'alquiler', true)

} else if (vistaActual === 'ventas-view'){

    showIndex(prop_ventas, 'venta', false)

} else if (vistaActual === 'alquiler-view'){
    
    showIndex(prop_alquiler, 'alquiler', false)
}

// if(ventas-view > 0 ) muestra solo prop_ventas sin limite
// else if (index-view === 0)  muestra prop_ventas y alquiler solo 3
// else if (alquiler-view < 0) muestra solo prop_alquiler sin limite


// console.log(window.location)
/*
1- primero escoger el metodo que vamos a utilizar para saber en que html estamos check!!
2- una vez elegido el metodo definir que se va arealizar con la funcion showIndex check!!!
3- liberar limite de mostrar solo 3 de la funcion showIndex
4- utilizar una funcion diferente a showIndex para liberar el limite (opcional)
*/