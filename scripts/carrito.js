document.addEventListener('DOMContentLoaded', function(){
        // Función para cargar el carrito desde el LocalStorage
        function cargarCarritoDesdeLocalStorage() {
            const carritoGuardado = localStorage.getItem('carrito');
            if (carritoGuardado) {
                carrito = JSON.parse(carritoGuardado);
                mostrarProductosEnCarrito();
            }
        }

        const contenedor = document.getElementById('container');
    // Función para mostrar los productos en el carrito
    function mostrarProductosEnCarrito() {

        const carritoIcon = document.getElementById('carrito-art')
        carritoIcon.textContent = carrito.length

        let subtotal = 0
        //const name = document.getElementById('name-cart')
        carrito.forEach(producto => {
            const divRow = document.createElement('div');
            divRow.classList.add('row', 'valores-dos');
        

            const divImageCart = document.createElement('div');
            divImageCart.id = 'image-cart';
            divImageCart.classList.add('col-xs-12', 'col-sm-12', 'col-md-3', 'col-lg-3', 'col-xl-3', 'col-xxl-3','imagen-cart');
            const laimage = document.createElement('img')
            laimage.src = `../imagenes/${producto.image}`            
            divImageCart.appendChild(laimage)


            const divNameCart = document.createElement('div');
            divNameCart.id = 'name-cart';
            divNameCart.classList.add('col-xs-12', 'col-sm-12', 'col-md-3', 'col-lg-3', 'col-xl-3','col-xxl-3', 'black', 'detalles');
            const nameParagraph = document.createElement('h5');
            nameParagraph.textContent = `${producto.name}`;
            const release = document.createElement('h6')
            release.textContent = `Release : ${producto.release}`
            divNameCart.appendChild(nameParagraph);
            divNameCart.appendChild(release)

            const divPriceCart = document.createElement('div');
            divPriceCart.id = 'price-cart';
            divPriceCart.classList.add('col-xs-12', 'col-sm-12', 'col-md-3','col-lg-2', 'col-xl-2','col-xxl-2', 'detalles');
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = `¥${producto.price}`;
            divPriceCart.appendChild(priceParagraph);

            const divQuantityCart = document.createElement('div');
            divQuantityCart.id = 'quantity-cart';
            divQuantityCart.classList.add('col-xs-12', 'col-sm-12', 'col-md-3', 'col-lg-2', 'col-xl-2','col-xxl-2', 'detalles');
            const quantityParagraph = document.createElement('p');
            quantityParagraph.textContent = producto.quantity;
            divQuantityCart.appendChild(quantityParagraph);

            const divTotal = document.createElement('div');
            divTotal.id = 'total';
            divTotal.classList.add('col-xs-12', 'col-sm-12', 'col-md-3', 'col-lg-2' , 'col-xl-2', 'col-xxl-2','detalles');
            const totalParagraph = document.createElement('p');
            totalParagraph.textContent = `¥${producto.total}`;
            divTotal.appendChild(totalParagraph);

            subtotal+= producto.total            
            // Agregar elementos al contenedor
            divRow.appendChild(divImageCart);
            divRow.appendChild(divNameCart);
            divRow.appendChild(divPriceCart);
            divRow.appendChild(divQuantityCart);
            divRow.appendChild(divTotal);
            contenedor.appendChild(divRow);
            
        });
        //const sub = document.getElementById('sub')
        const divMaster = document.createElement('div')
        divMaster.classList.add('row', 'door');

        const divSubtotal = document.createElement('div')
        divSubtotal.classList.add('subtotal-container', 'col-12')
        divSubtotal.id = 'subtotal';

        const textoDos = document.createElement('h4')
        textoDos.textContent = `Subtotal `
        const subtotalTexto = document.createElement('h3')
        subtotalTexto.textContent = `¥${subtotal}`

        const shipping = document.createElement('p')
        shipping.classList.add('shipping', 'col-12')
        shipping.textContent = `Taxes and shipping calculated at checkout`
        const terminos = document.createElement('p')
        terminos.textContent = 'Terms of Use and Shipping Policy Do you agree the checkbox?'
        terminos.classList.add('terminos')

        const contbtn = document.createElement('div')
        contbtn.classList.add('contbtn', 'col-12')
        const comprabtn = document.createElement('button')
        comprabtn.textContent = 'BUY NOW'
        comprabtn.classList.add('comprabtn')


        divSubtotal.appendChild(textoDos)
        divSubtotal.appendChild(subtotalTexto)
        contbtn.appendChild(comprabtn)
        divMaster.appendChild(divSubtotal)
        divMaster.appendChild(shipping)
        divMaster.appendChild(terminos)
        divMaster.appendChild(contbtn)
        contenedor.appendChild(divMaster)


}
    const equi = document.getElementById('equi')
    const options = document.getElementById('options')
    const tres = document.getElementById('treslineas')

    tres.addEventListener('click', () =>{
        options.style.display = 'block';
        document.body.classList.add("no-scroll");
        options.classList.remove('animated')
        options.classList.remove('fadeOutLeft')
        options.classList.add('animated')
        options.classList.add('fadeInLeft')

        
    })
    equi.addEventListener('click', ()=>{
        document.body.classList.remove("no-scroll");
       // options.style.display = 'none';
        options.classList.remove('animated')
        options.classList.remove('fadeInLeft')
        options.classList.add('animated')
        options.classList.add('fadeOutLeft')
    })
cargarCarritoDesdeLocalStorage();
})
//export { actualizarTotal }