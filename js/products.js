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

  let cartItems = [];
  if (localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }

  // Adicionar o produto atual à lista de produtos
  cartItems.push(product);

  // Armazenar a lista de produtos atualizada em localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Redirecionar o usuário para a página de checkout
  window.open("/php/buy.php", "_self");
}
