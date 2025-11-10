
function mostrar(seccion) {
  document.getElementById('ventas').style.display = 'none';
  document.getElementById('inventario').style.display = 'none';
  document.getElementById('membresias').style.display = 'none';
  document.getElementById(seccion).style.display = 'block';
}

const productos = [
  { sku: '001', nombre: 'Agua', precio: 10, imagen: '' },
  { sku: '002', nombre: 'Proteína', precio: 150, imagen: '' }
];

const carrito = [];

function cargarProductos() {
  const cont = document.getElementById('productos');
  productos.forEach((p, i) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${p.nombre}</strong> - $${p.precio} <button onclick="agregarAlCarrito(${i})">Agregar</button>`;
    cont.appendChild(div);
  });
}

function agregarAlCarrito(i) {
  carrito.push(productos[i]);
  actualizarCarrito();
}

function actualizarCarrito() {
  const ul = document.getElementById('carrito');
  ul.innerHTML = '';
  carrito.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - $${p.precio}`;
    ul.appendChild(li);
  });
}

function imprimirTicket() {
  let ticket = '--- TICKET 58MM ---
';
  carrito.forEach(p => {
    ticket += `${p.nombre} - $${p.precio}
`;
  });
  ticket += `Pago: ${document.getElementById('tipoPago').value}
`;
  ticket += '---------------------';
  const blob = new Blob([ticket], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'ticket.txt';
  link.click();
}

cargarProductos();

// Inventario
document.getElementById('formInventario').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Producto agregado (simulado).');
});
