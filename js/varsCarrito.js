const carritoProductsContainer = document.getElementById('carritoProductsContainer')

const btnLimpiarCarrito = document.getElementById('btnLimpiarCarrito')

const btnFinalizarCompra = document.getElementById('btnFinalizarCompra')

btnFinalizarCompra.addEventListener('click', ()=>{
    finalizarCompra()
})

btnLimpiarCarrito.addEventListener('click', ()=>{
    LimpiarCarrito()
})