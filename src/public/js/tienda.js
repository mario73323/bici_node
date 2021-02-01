let tienda = document.getElementById("lista-productos");

tienda.addEventListener('click',(e)=>{agregar(e)});

function agregar(e){
    if (e.target.classList.contains('agregarr')) {
        e.preventDefault();
        alert("Se agrego el producto al carrito");
    }
}
