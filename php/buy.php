<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slug t-shirt</title>
    <link rel="stylesheet" href="/css/buy.css" />
    <link rel="stylesheet" href="/css/EmptyCart.css" />
  </head>
  <body>
    <header>
      <div id="header">
        <img src="/Img/SlugLogo.jpg" alt="slug-logo" id="slug-logo" />
      </div>
    </header>
    <div id="home">
      <a href="/php/index.php" id="sub-links">Início </a>
      <p id="sub-links">> Carrinho</p>
    </div>
    <main id="main-content">
      <div id="table-reponsive">
        <table id="product-table" class="table-centered">
          <thead id="teste">
            <tr id="titles">
              <th id="sub-titles">Produto</th>
              <th id="sub-titles">Nome</th>
              <th id="sub-titles">Tamanho</th>
              <th id="sub-titles">Preço</th>
              <th id="sub-titles">Quantidade</th>
              <th id="sub-titles">Excluir</th>
            </tr>
          </thead>
          <tbody id="cart-items">
            <script src="/js/Cart.js"></script>
          </tbody>
        </table>
      </div>
      <form method="post">
        <div id="finish">
          <button id="finish-buy" type="submit" onclick="Pay()">
            FINALIZAR COMPRA
          </button>
          <script>
            const buttonPay = document.getElementById("finish-buy");
            if (cartItems.length === 0) {
              buttonPay.remove();
            }
          </script>
        </div>
      </form>
    </main>
  </body>
  <script src="/js/buy.js" render></script>
</html>
