//import { actualizarTotal } from "./carrito";
document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get('id');
    function cargarCarritoDesdeLocalStorage() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
            const carritoIcon = document.getElementById('carrito-art')
            carritoIcon.textContent = carrito.length
          //  mostrarProductosEnCarrito();
        }
    }
    let carrito = []
    
      // Función para actualizar el carrito en el LocalStorage
    function actualizarLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        const carritoIcon = document.getElementById('carrito-art')
        carritoIcon.textContent = carrito.length
    }

    fetch(`../usuarios.json`)
    .then(response => response.json())
    .then(data => {
        const producto = data.find(item => item.id === parseInt(idProducto));
        
        if (producto) {
            const tamaos = document.querySelector('.pene')
            if(producto.tipo === "ropa") {
                tamaos.style.display = "block";
                console.log(tamaos)
            }
            const contenedorImage = document.getElementById('image')
            const imagen = document.createElement('img');
            
        
            imagen.src = `../imagenes/${producto.image}`;
            //
            const contenedorTitulo = document.getElementById('titulo')
            const titulo = document.createElement('h2')
            titulo.textContent = `${producto.name}`
            titulo.classList.add('titulo-producto')
            //
            const contenedorPrecio = document.getElementById('precio')
            const precio = document.createElement('h3')
            precio.textContent = `¥${producto.price}`
            precio.classList.add('precio')
            //
            contenedorTitulo.appendChild(titulo)
            contenedorPrecio.appendChild(precio)
            contenedorImage.appendChild(imagen)
        } else {
            alert('Producto no encontrado');
        }
        const numeroElemento = document.getElementById('numeros');
        const masBoton = document.getElementById('mas');
        const menosBoton = document.getElementById('menos');
        let cantidadProductos = 1;
        
        function actualizarNumero(valor) {
            numeroElemento.textContent = valor;
        }
        function incrementarNumero() {
            cantidadProductos++;
            actualizarNumero(cantidadProductos);
        }
        function decrementarNumero() {
            if (cantidadProductos > 1) {
                cantidadProductos--;
                actualizarNumero(cantidadProductos);
            }
            
        }
    masBoton.addEventListener("click", incrementarNumero);
    menosBoton.addEventListener("click", decrementarNumero);
    
    //boton action

    const elemento = document.getElementById('elemento')
    const boton = document.getElementById('boton')
    const enlaceCarrito = document.createElement('a')
    const viewCart = document.createElement('button')
    enlaceCarrito.href = `../pages/carrito.html`
    viewCart.classList.add('boton')
    viewCart.textContent = 'view cart'
    enlaceCarrito.appendChild(viewCart)
    
    boton.addEventListener('click', ()=>{
        const totalProducto = producto.price * cantidadProductos

        carrito.push({
            id : producto.id,
            name : producto.name,
            price : producto.price,
            image : producto.image,
            quantity : cantidadProductos,
            release : producto.release,
            total : totalProducto
        })
        boton.textContent = 'add to cart'
        boton.classList.remove('boton')
        boton.classList.add('added')
        boton.disabled = true
        elemento.appendChild(enlaceCarrito)

        actualizarLocalStorage();
        console.log(carrito);
    })



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
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));
//    const botonCarrito = document.getElementById('boton');
//    botonCarrito.addEventListener("click", agregarAlCarrito)    
cargarCarritoDesdeLocalStorage()
});
