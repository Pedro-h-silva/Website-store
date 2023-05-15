// Obter as informações do produto armazenadas em localStorage
const product = JSON.parse(localStorage.getItem("product"));
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const price = urlParams.get("price");
const size = urlParams.get("size");
const image = urlParams.get("image");
document.getElementById("product-name").textContent = name;
document.getElementById("product-price").textContent = price;
document.getElementById("product-size").textContent = size;
document.getElementById("product-image").src = decodeURIComponent(image);
