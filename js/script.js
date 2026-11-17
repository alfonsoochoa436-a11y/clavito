// Arreglo de objetos con la información de cada producto (Paso 2)
const productosCompra = [
  { precio: 120, cantidadId: "cantidad-1", subtotalId: "subtotal-1" },
  { precio: 850, cantidadId: "cantidad-2", subtotalId: "subtotal-2" },
  { precio: 1250, cantidadId: "cantidad-3", subtotalId: "subtotal-3" },
  { precio: 320, cantidadId: "cantidad-4", subtotalId: "subtotal-4" }
];

// Función para calcular subtotales y validar entradas (Paso 3)
function calcularCompra() {
  let total = 0;
  for (const producto of productosCompra) {
    const campo = document.getElementById(producto.cantidadId);
    const cantidad = Number(campo.value);

    // Validación de enteros no negativos
    if (campo.value.trim() === "" || !Number.isInteger(cantidad) || cantidad < 0) {
      alert("Escribe cantidades enteras iguales o mayores que cero.");
      campo.focus();
      return null;
    }

    const subtotal = producto.precio * cantidad;
    document.getElementById(producto.subtotalId).textContent = subtotal.toFixed(2);
    total += subtotal;
  }
  return total;
}

// Evento al hacer clic en el botón de calcular con descuento condicional (Paso 6)
document.getElementById("calcular-compra").addEventListener("click", () => {
  const importe = calcularCompra();
  if (importe === null) return;

  let descuento = 0;
  // Regla if/else: 10% de descuento si el importe es de $1,000 o más
  if (importe >= 1000) {
    descuento = importe * 0.10;
  } else {
    descuento = 0;
  }

  const totalPagar = importe - descuento;

  document.getElementById("importe-compra").textContent = importe.toFixed(2);
  document.getElementById("descuento-compra").textContent = descuento.toFixed(2);
  document.getElementById("total-compra").textContent = totalPagar.toFixed(2);
});