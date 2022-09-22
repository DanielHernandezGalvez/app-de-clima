class Producto {
    constructor(id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = Number(precio)
    }
};

const arrayProductos = [];

const producto1 = new Producto(1, 'Colchón', 193);
const producto2 = new Producto(2, 'Almohada', 133);
const producto3 = new Producto(3, 'ambos', 200); //tiene descuento

arrayProductos.push(producto1, producto2, producto3)

// el método sort ordena de menor a mayor o viceversa
const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
}

const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

// el punto join convierte a los strings
const mostrarListaOrdenada = () => {
    const array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre + ' $' + producto.precio))
    alert('Lista de precios: ' + '\n' + array.join('\n'));
};

// se pone let porque van a cambiar su valor
const agregarProductos = () => {
    let otroProducto = false;
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;

    do {
        productoNombre = prompt('¿Quieres comprar el Colchón, la Almohada o ambos?')
        productoCantidad = prompt('¿Cúantos quieres comprar?');
        //EL MÉTODO FIND RECORRE EL ARRAY Y CORROBORA QUE EXISTA DENTRO DEL ARRAY
        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if(producto){
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no existe en el Catálogo')
        }

        otroProducto = confirm('¿desea seguir comprando?');
    } while (otroProducto);

    descuento(total)

};

const descuento = (total) => {
    if (total >= 300){
        total = total * 0.80;
        alert('tienes un descuento del 20%');
    }
    obtenerPrecioDeEnvio(total);
};

const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm('Quieres envío a domicilio?');
    if (confirmacion && total >= 300){
        alert('tienes envío gratis. el total de la compra es: $'+total)
    } else if(confirmacion && total < 300 && total !== 0) {
            total = total  + 150;
            alert('El envío cuesta 150$. el total de tu compra es: $'+ total);
    } else {
        alert('El total de la compra es: $'+total)
    }
}

// metodo confirm es para entablar dialogo, si contesta si o no dará un booleano respectivamente
const comprar = () => {
    if (confirm('¿Quieres ordenar la lista de productos del más barato al más caro?')) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    agregarProductos();
}
// recuerda siempre llamar a la función
comprar();