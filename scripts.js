document.addEventListener("DOMContentLoaded", function() {
    function cargarCarritoDesdeLocalStorage() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
            const carritoIcon = document.getElementById('carrito-art')
            carritoIcon.textContent = carrito.length
          //  mostrarProductosEnCarrito();
        }
    }
    fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
    const contenedor = document.getElementById('row');
    cargarCarritoDesdeLocalStorage()

    data.forEach(item => {
        if(item.id < 17) {
            const productoDiv = document.createElement('div');
            const imagenEnlace = document.createElement('a')
            imagenEnlace.href = `../pages/producto.html?id=${item.id}`
            productoDiv.classList.add('col-xxl-3', 'col-sm-6', 'col-md-6', 'col-lg-4', 'element', 'g-3', 'p-0')
            const imgContainer = document.createElement('div')
            imgContainer.classList.add('img-conteiner')
         // Crear un elemento de imagen y establecer su atributo src con la URL de la imagen
            const imagen = document.createElement('img');
            imagen.src = `./imagenes/${item.image}`;
            imagen.alt = item.name
            imagen.classList.add('img-visible')
            const imagenHover = document.createElement('img');
            imagenHover.src = `./imagenes/${item.imagehover}`;
            imagenHover.alt = item.name
            
            imgContainer.appendChild(imagen)
            imgContainer.appendChild(imagenHover)

            imagenEnlace.appendChild(imgContainer)
      
                imagenHover.classList.add('img-ocult')
                // Crear elementos de texto para mostrar el nombre y el precio del producto
                const nombreProducto = document.createElement('a');
                nombreProducto.href = `../pages/producto.html?id=${item.id}`;
                nombreProducto.textContent = item.name;
                // Agregar manejadores de eventos para detectar cuando el cursor pasa sobre las imágenes
                imagenEnlace.addEventListener('mouseenter', () => {
                    // Ocultar imagen1 cambiando su opacidad a 0 y la de imagen2 a 1
                    imagen.style.opacity = '0';
                    imagenHover.style.opacity = '1';
                });
                imagenEnlace.addEventListener('mouseleave', () => {
                    // Ocultar imagen2 cambiando su opacidad a 0 y la de imagen1 a 1
                    imagen.style.opacity = '1';
                    imagenHover.style.opacity = '0';
                });
                const precioProducto = document.createElement('a');
                precioProducto.href = `../pages/producto.html?id=${item.id}`;
                precioProducto.textContent = `¥${item.price}`;

                // Agregar elementos al contenedor del producto
                productoDiv.appendChild(imagenEnlace);
                productoDiv.appendChild(nombreProducto);
                productoDiv.appendChild(precioProducto);
                productoDiv.classList.add('producto-div')
                 // Agregar el producto al contenedor principal
                contenedor.appendChild(productoDiv);    
            }
            
    });
    const allItemsEnlace = document.createElement('a')
    allItemsEnlace.href = `../pages/allItems.html`
    const contview = document.getElementById('viewAll')
    const viewAll = document.createElement('button')

    viewAll.textContent = 'view all'
    viewAll.classList.add('boton')

    allItemsEnlace.appendChild(viewAll)
    contview.appendChild(allItemsEnlace)
    // Agregar manejadores de eventos para detectar cuando el cursor pasa sobre las imágenes
    const equi = document.getElementById('equi')
    const options = document.getElementById('options')
    const tres = document.getElementById('treslineas')
  //  const animated = document.getElementsByClassName('animated')

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
});
