function cambiarColor() {
  const colores = ["#f0f0f0", "#d1e8e2", "#f7cac9", "#92a8d1", "#ffe4b5"];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor = colores[Math.floor(Math.random() * colores.length)];

  while (nuevoColor === colorActual) {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  }

  document.body.style.backgroundColor = nuevoColor;
}
