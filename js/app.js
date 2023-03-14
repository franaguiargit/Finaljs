const obtenerArray = async (URL) =>{
    /* debugger */
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        productAmostrar = ""
        stockProducts = data
        stockProducts.forEach(producto => {productAmostrar += retortnoCardProducto(producto)})
        productsContainer.innerHTML = productAmostrar
        findButton()
    })
    .catch((err)=> productsContainer.innerHTML = retornoCardError())
}

const retortnoCardProducto = (producto)=>{
    const {id, name, price, img} = producto
    let HTMLcard = `<div class="product_container border trasform_item">
                    <a href="#" class="link_product">
                        <div class="img_container_propio">
                            <img class="img_style_propio" src="${img}" alt="Foto del producto">
                        </div>
                        <span class="titulo_producto">${name}</span>
                        <span class="precio_del_producto">$${price}</span>
                    </a>
                    <button id="${id}" class="btn btn-primary boton_detalles btnAgregarCarritoFuncion" hre>Añadir al carro</button>
                    </div>`
    return HTMLcard
}

const retornoCardError = ()=>{
    let HTMLCardError = `<div class="center white-text"> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                            <br><br> 
                         </div>`
    return HTMLCardError
}

selecttipos.addEventListener('change',()=>{
    console.log(selecttipos.value)
    if(selecttipos.value == 'all'){
        obtenerArray(URL)
    }
    else{
        productAmostrar = ""
        let arrayNuevo = stockProducts.filter(producto => producto.brand === selecttipos.value)
        arrayNuevo.forEach(producto => {productAmostrar += retortnoCardProducto(producto)})
        productsContainer.innerHTML = productAmostrar
        console.log(arrayNuevo)
        findButton()
    }
})

const agregarCarrito = (id)=>{
    let productoAgregar = stockProducts.find(item=> item.id ==id)
    carritoCompras.push(productoAgregar) 
    actualizarCarrito(productoAgregar)
}

botonCarritoHeader.addEventListener('click', ()=>{
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras ))
})

const actualizarCarrito = ()=>{
    contadorCarrito.innerHTML = Object.keys(carritoCompras).length;
}

function findButton (){
  let btnAgregar = document.getElementsByClassName('btnAgregarCarritoFuncion')
    for (const btn of btnAgregar) {
        btn.addEventListener('click',()=>{
            agregarCarrito(btn.id);
        })
    }  
}

obtenerArray(URL)