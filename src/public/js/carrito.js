
function calcular() {
    let cantidad = document.getElementById('cantidad_p').value;
    let precio_u = document.getElementById('precio_u_p').textContent;
    let total_p = document.getElementById('precio_total_p');
    let total = document.getElementById('total_carrito');
    total_p.innerText = cantidad * Number(precio_u);
    total.innerText = cantidad * Number(precio_u);
}
function agregar() {
    let carrito = document.getElementById('lista-compra');
    const producto = document.createElement('div');
    producto.innerHTML = `
        <div class="contenedor-producto bg-blanco">
            <div class="box">
               <img src="img/s7d5.scene7.com.jpg" width=100>
            </div>
            <div class="box detalle-p">Bicicleta modelo y marca</div>
            <div class="box">
                <input onchange="calcular()" type="number" class="pequeño cantidad" min="1" value=1 required id="">
                <a href="#" class="a-eliminar no-margin" title="Eliminar"><i class="fas fa-trash-alt"></i></a>
            </div>
                <div class="box">$<span id="">900</span></div>
                <div class="box" id="subtotales">$<span id="">900</span> </div>
            </div>
    `
    carrito.appendChild(producto);
}