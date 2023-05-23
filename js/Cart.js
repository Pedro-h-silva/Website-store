// Obter os itens do carrinho armazenados em localStorage
const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const cartWrapper = document.getElementById("table-reponsive");

// Obter a referência da tabela
const cartTable = document.getElementById("cart-items");
const home = document.getElementById("home");

// Verificar se o carrinho está vazio
if (cartItems.length === 0) {
  cartWrapper.remove();
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
  linkEmptyCart.setAttribute("href", "/Html/index.html");
  linkEmptyCart.classList.add("custom-link");
  innerDiv.appendChild(linkEmptyCart);

  //Carrino
  const TextLinkEmptyCart = document.createElement("a");
  TextLinkEmptyCart.textContent = "carrinho ";
  TextLinkEmptyCart.id = "TextLinkEmptyCart";
  TextLinkEmptyCart.setAttribute("href", "/Html/buy.html");
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
    "Seu carrinho está vazio no momento, clique no link e continue navegando<br><a href='/Html/index.html' id='link-text'>Clique aqui</a>";
  message.id = "emptyCartMessage";
  emptyCartDiv.appendChild(message);

  // Adicionar o texto explicativo na div
  const socialMedia = document.createElement("p");
  socialMedia.innerHTML =
    "<a href='https://www.instagram.com/slug_br/' ><img src='/Img/instagram.png' alt='icon' id='icon-insta'/></a> <p>DIREITOS RESERVADOS © 2023 - <a href='/Html/index.html'>SLUG</a></p>";
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
} else {
  // Se o carrinho não estiver vazio, continuar com o loop forEach
  cartItems.forEach((item) => {
    const row = document.createElement("tr");

    const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.id = "image";
    imageCell.id = "sub-titles-2";
    image.src = item.image;
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    const nameCell = document.createElement("td");
    nameCell.id = "sub-titles-2";
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const sizeCell = document.createElement("td");
    sizeCell.id = "sub-titles-2";
    sizeCell.textContent = item.size;
    row.appendChild(sizeCell);

    const priceCell = document.createElement("td");
    priceCell.id = "sub-titles-2";
    priceCell.textContent = item.price;
    row.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    const quantityInputHtml = `
      <div class="quantity-input">
        <button type="button" class="minus-btn" onclick="decrementValue()">-</button>
        <input type="text" id="quantity" name="quantity" value="1" readonly >
        <button type="button" class="plus-btn" onclick="incrementValue()">+</button>
      </div>
    `;
    quantityCell.innerHTML = quantityInputHtml;
    quantityCell.id = "sub-titles-2";
    row.appendChild(quantityCell);

    const removeCell = document.createElement("td");
    const removeButtonHtml = `
    <button type="reset" onclick="Delete()">
      <img src="/Img/lixeira.svg" alt="lixeira" id="lixeria">
    </button>
  `;
    removeCell.innerHTML = removeButtonHtml;
    removeCell.id = "sub-titles-2";
    row.appendChild(removeCell);

    cartTable.appendChild(row);
  });
}
