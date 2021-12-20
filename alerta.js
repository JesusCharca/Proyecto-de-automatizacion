const rango = document.querySelector('#rango');
const texto = document.querySelector("#texto");

rango.oninput= () => {
    texto.innerHTML = rango.value;
}