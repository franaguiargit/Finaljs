const mostrarCarrito = ()=>{
    const carritoComprasNuevo = JSON.parse(localStorage.getItem("carritoCompras"))
    carritoProductsContainer.innerHTML = ""
    carritoComprasNuevo.forEach(product => {
        const {name, price, agh} = product 
        let div = document.createElement('div')
        div.classList.add('carrito_container_a', 'card')
        div.innerHTML = `
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg></button>
        <div class="carrito_product border">
            <div class="img_container_propio">
                <img class="img_style_propio" src="${agh}" alt="Foto del producto">
            </div>
            <span class="carrito_titulo_producto">${name}</span>
            <span class="carrito_precio_del_producto">$${price}</span>
        </div>`
        carritoProductsContainer.appendChild(div)
    })
}

const LimpiarCarrito = ()=>{
    carritoProductsContainer.innerHTML = ""
    localStorage.clear();
    mostrarCarrito()
}

const finalizarCompra = ()=>{
    localStorage.clear();
    Swal.fire({
        title: 'Gracias por su compra!!!',
        text:'Le llegara un mail de confirmacion de su producto',
        icon: 'success',
        text:'volvera al inicio en 3 segundos'
    })
    setTimeout(() => {location.href = "../index.html"},3000)
}

mostrarCarrito()
