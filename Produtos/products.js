function Cart() {
  // Obter os elementos HTML do produto
  const name = document.getElementById("name-product").innerText;
  const price = document.getElementById("price-product").innerText;
  const size = document.getElementById(
    "ProductSelect-product-template-option-0"
  ).value;
  const image = document.getElementById("image-product").src;

  // Criar um objeto com as informações do produto
  const product = { name, price, size, image };

  // Codificar o objeto em uma string de consulta da URL
  const params = new URLSearchParams(product).toString();

  // Armazenar a string de consulta da URL em localStorage para ser acessada na página de checkout
  localStorage.setItem("params", params);

  // Redirecionar o usuário para a página de checkout com os parâmetros na URL
  window.location.href = "/Compra/buy.html?" + params;
}
