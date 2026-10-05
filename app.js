class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const preciodesc= this.precio - (this.precio * (this.descuento / 100));
        return preciodesc.toFixed(2); 
    }
}
const producto1 = new Producto(
    "Laptop Gamer", 
    3500, 
    15, 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwGqgS8cyv9OVDnGlOpFuBzd33YqsbMWkZpffLRUvceoPsuZ__E1gynx9&s=10"
);

const producto2 = new Producto(
    "Smartphone 5G", 
    1800, 
    10, 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jTdw3M3eCHL2et12-44nDVZWk8y3Rm_f_ctRFg4DNg&s=10"
);

const producto3 = new Producto(
    "Audífonos Bluetooth", 
    250, 
    20, 
    "https://carsaperupoc.vtexassets.com/arquivos/ids/195530-800-800?v=639188954690570000&width=800&height=800&aspect=true"
);
const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: S/ <span id="precio-${index}">${producto.precio}</span></p>
        <button id="btn-${index}">Aplicar Descuento</button>
    `;

    contenedor.appendChild(tarjeta);

    const boton = tarjeta.querySelector(`#btn-${index}`);
    const precioSpan = tarjeta.querySelector(`#precio-${index}`);

    boton.addEventListener("click", () => {
        const precioOferta = producto.calcularPrecioFinal();

        precioSpan.textContent = `${precioOferta} (¡-${producto.descuento}%!)`;

        boton.disabled = true;
        boton.textContent = "Descuento Aplicado";
        boton.style.backgroundColor = "#27ae60";
    });
});