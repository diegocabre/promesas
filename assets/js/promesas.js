
const obtenerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};


const mostrarTitulos = (albumes) => {
  const listaTitulos = document.getElementById("titulos");
  albumes.slice(0, 20).forEach((album, index) => {
    const titulo = document.createElement("li");
    titulo.textContent = `${index + 1}. ${album.title}`;
    listaTitulos.appendChild(titulo);
  });
};


const informacionEnviada = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};


const mostrarMensaje = async () => {
  const mensaje = await informacionEnviada();
  document.getElementById("mensaje").textContent = mensaje;
};


const main = async () => {
  const albumes = await obtenerDatos();
  mostrarTitulos(albumes);
  await mostrarMensaje();
};

main();
