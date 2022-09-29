const contenedor = document.getElementById('producto-contenedor');

const contenedorCarrito = document.getElementById('carrito-contenedor');

let carrito = []
productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML += `
    <div class="card-image">
        <img src="${producto.img}">
        <span class="card-title">${producto.nombre}</span>
    </div>
    <div class="card-content">
        <p>Antes <del>${producto.antes}</del>, Ahora ${producto.precio}</p>
        </div>
        <div>
        <button id="agregar${producto.id}" class="btn">Comprar</button>
        </div>
    `;
    contenedor.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

});

const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito();
    console.log(carrito)
}

const actualizarCarrito = () => {
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${prod.cantidad} </span></p>
        `

        contenedorCarrito.appendChild(div)
    })
}



function bienvenida(){
    alert('bienvenido(a) a la Grande')
};
bienvenida();

const mostrarListaOrdenada = () => {
    const array = [];
    productos.forEach(producto => array.push(producto.nombre + ' $' + producto.precio))
    alert('Lista de precios: ' + '\n' + array.join('\n'));
};

mostrarListaOrdenada();