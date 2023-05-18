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

function incrementValue() {
  var value = parseInt(document.getElementById("quantity").value, 10);
  value = isNaN(value) ? 1 : value;
  if (value < 10) {
    value++;
    document.getElementById("quantity").value = value;
  }
}

function decrementValue() {
  var value = parseInt(document.getElementById("quantity").value, 10);
  value = isNaN(value) ? 1 : value;
  if (value > 1) {
    value--;
    document.getElementById("quantity").value = value;
  }
}

function deleteRow(row) {
  // Obtém o índice da linha para remover
  const rowIndex = row.rowIndex;

  // Remove a linha da tabela
  const cartTable = document.getElementById("product-table");
  cartTable.deleteRow(rowIndex);

  // Obtém os itens do carrinho armazenados em localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // Remove o item correspondente ao índice da linha
  cartItems.splice(rowIndex - 1, 1);

  // Atualiza o armazenamento local com os itens atualizados
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function Delete() {
  const row = event.target.closest("tr");
  deleteRow(row);

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const cartWrapper = document.getElementById("table-reponsive");
  const buttonPay = document.getElementById("finish-buy");

  if (cartItems.length === 0) {
    cartWrapper.remove();
    buttonPay.remove();
  }
}

function Pay() {
  alert("teste");
}
