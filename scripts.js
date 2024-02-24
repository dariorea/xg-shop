//document.addEventListener("DOMContentLoaded", function() {
//        // El DOM ha sido completamente cargado, ahora puedes realizar cambios en él
//
//
//        
//            let numero = document.getElementById('numeros')
//            let mas = document.getElementById('mas')
//            let menos = document.getElementById('menos')
//            let numeros = 1;
//            const boton = document.getElementById('boton')
// 
//            let articulos = 0
//
//
//
//            
//            // Agregar un evento de clic al botón
//            menos.addEventListener("click", function(){
//                if(numeros > 1) {
//                    numeros--
//                }
//                numero.textContent = numeros
//            });
//            mas.addEventListener("click", function() {
//                // Aumentar el número en 1 cada vez que se haga clic en el botón
//                numeros++;
//                // Mostrar el número actualizado en el elemento de resultado
//                numero.textContent = numeros;
//            });
//            function addCar() {
//                articulos++
//                document.getElementById('carrito-art').textContent = articulos
//            }
//       
//
//
//           boton.addEventListener("click", addCar);        
//
//
//    });

document.addEventListener("DOMContentLoaded", function() {
    const numeroElemento = document.getElementById('numeros');
    const masBoton = document.getElementById('mas');
    const menosBoton = document.getElementById('menos');
    const botonCarrito = document.getElementById('boton');
    const carritoElemento = document.getElementById('carrito-art');


    let cantidadArticulos = 0;
    let cantidadProductos = 0;



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

    function agregarAlCarrito() {
        if(cantidadArticulos === 0) {
            document.getElementById("carrito-art").classList.remove("oculto");
            document.getElementById("carrito-art").classList.add("mostrar");  // Agregar la clase "mostrar" que muestra el elemento

        }
        cantidadArticulos++;
        carritoElemento.textContent = cantidadArticulos;
    
    }

    masBoton.addEventListener("click", incrementarNumero);
    menosBoton.addEventListener("click", decrementarNumero);
    botonCarrito.addEventListener("click", agregarAlCarrito);

    if(cantidadArticulos > 0) {
        // carritoElemento.classList.remove("oculto");
        document.getElementById("carrito-art").classList.add("mostrar");  // Agregar la clase "mostrar" que muestra el elemento
    }

    fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
    const contenedor = document.getElementById('contenedor');

    data.forEach(item => {
        const productoDiv = document.createElement('div');
             // Crear un elemento de imagen y establecer su atributo src con la URL de la imagen
            const imagen = document.createElement('img');
            const carpeta = "./imagenes/"
            imagen.src = `${carpeta}${item.image}`;

            // Crear elementos de texto para mostrar el nombre y el precio del producto
            const nombreProducto = document.createElement('p');
            nombreProducto.textContent = `Nombre: ${item.name}`;
            const precioProducto = document.createElement('p');
            precioProducto.textContent = `Precio: ${item.price}`;

            // Agregar elementos al contenedor del producto
            productoDiv.appendChild(imagen);
            productoDiv.appendChild(nombreProducto);
            productoDiv.appendChild(precioProducto);

             // Agregar el producto al contenedor principal
            contenedor.appendChild(productoDiv);
    });
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));
});
