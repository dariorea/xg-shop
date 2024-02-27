document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get('id');

    //fetch('usuarios.json')
    //.then(response => response.json())
    //.then(data => {
    //                data.forEach(item => {
//
    //                const producto = item.find(item => item.id === parseInt(idProducto));
    //    
    //                if (producto) {
    //                const contenedorDetallesProducto = document.getElementById('detalles-producto');
    //                contenedorDetallesProducto.innerHTML = `
    //                <h1>${producto.name}</h1>
    //                <p>Precio: $${producto.price}</p>
    //                <img src="${producto.image}" alt="${producto.name}">
    //                `;
    //                } else {
    //                    alert('Producto no encontrado');
    //                };
    //})
    //.catch(error => console.error('Error cargando el archivo JSON:', error));
    //})

    fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
        const producto = data.find(item => item.id === parseInt(idProducto));


        if (producto) {
   //         const contenedorDetallesProducto = document.getElementById('detalles-producto');


            const contenedorImage = document.getElementById('image')
            const imagen = document.createElement('img');
            const carpeta = "./imagenes/"
            imagen.src = `${carpeta}${producto.image}`;

            const contenedorTitulo = document.getElementById('titulo')
            const titulo = document.createElement('h2')
            titulo.textContent = `${producto.name}`
            titulo.classList.add('titulo-producto')
            contenedorTitulo.appendChild(titulo)

            const contenedorPrecio = document.getElementById('precio')
            const precio = document.createElement('h3')
            precio.textContent = `${producto.price}`
            precio.classList.add('precio')

            contenedorPrecio.appendChild(precio)
            contenedorImage.appendChild(imagen)
    
        } else {
            alert('Producto no encontrado');
        }
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));
});
