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
  const home = document.getElementById("home");

  if (cartItems.length === 0) {
    cartWrapper.remove();
    buttonPay.remove();
    home.remove();

    // Criar a div
    const emptyCartDiv = document.createElement("div");
    emptyCartDiv.id = "emptyCartDiv";

    const innerDiv = document.createElement("div");
    innerDiv.id = "innerDiv";

    const newDiv = document.createElement("div");
    newDiv.id = "newDiv";

    //link
    const linkEmptyCart = document.createElement("a");
    linkEmptyCart.textContent = "Início > ";
    linkEmptyCart.id = "linkEmptyCart";
    linkEmptyCart.setAttribute("href", "./index.php");
    linkEmptyCart.classList.add("custom-link");
    innerDiv.appendChild(linkEmptyCart);

    //Carrino
    const TextLinkEmptyCart = document.createElement("a");
    TextLinkEmptyCart.textContent = "carrinho ";
    TextLinkEmptyCart.id = "TextLinkEmptyCart";
    TextLinkEmptyCart.setAttribute("href", "./buy.php");
    TextLinkEmptyCart.classList.add("custom-link-2");
    innerDiv.appendChild(TextLinkEmptyCart);

    emptyCartDiv.appendChild(innerDiv);

    // Adicionar o título na div
    const titleEmptyCart = document.createElement("h3");
    titleEmptyCart.textContent = "Carrinho de compras";
    titleEmptyCart.id = "titleEmptyCart";
    emptyCartDiv.appendChild(titleEmptyCart);

    // Adicionar o texto explicativo na div
    const message = document.createElement("p");
    message.innerHTML =
      "Seu carrinho está vazio no momento, clique no link e continue navegando<br><a href='./index.php' id='link-text'>Clique aqui</a>";
    message.id = "emptyCartMessage";
    emptyCartDiv.appendChild(message);

    // Adicionar o texto explicativo na div
    const socialMedia = document.createElement("p");
    socialMedia.innerHTML =
      "<a href='https://www.instagram.com/slug_br/' ><img src='/Img/instagram.png' alt='icon' id='icon-insta'/></a> <p>DIREITOS RESERVADOS © 2023 - <a href='/php/index.php'>SLUG</a></p>";
    socialMedia.id = "emptyCartSocialMedia";
    newDiv.appendChild(socialMedia);

    emptyCartDiv.appendChild(newDiv);

    // Adicionar a div ao body do documento
    document.body.appendChild(emptyCartDiv);

    const emptyCartRow = document.createElement("tr");
    const emptyCartCell = document.createElement("td");
    emptyCartCell.colSpan = 6; // Definir o colspan para o número total de colunas
    emptyCartCell.textContent = emptyCartText;
    emptyCartRow.appendChild(emptyCartCell);
    cartTable.appendChild(emptyCartRow);
  }
}

function Pay() {
  alert("teste");
}
