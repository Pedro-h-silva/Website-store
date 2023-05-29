<?php
require('./vendor/autoload.php');


use EscapeWork\Frete\Correios\PrecoPrazo;
use EscapeWork\Frete\Correios\Data;
use EscapeWork\Frete\FreteException;

if(isset($_POST['cep'])){
  $cepDestino = $_POST['cep'];

  $frete = new PrecoPrazo();
  try {
  
      $frete->setCodigoServico(Data::PAC)
          ->setCepOrigem('95043273')   # apenas numeros, sem hifen(-)
          ->setCepDestino($cepDestino) # apenas numeros, sem hifen(-)
          ->setComprimento(30)              # obrigatorio
          ->setAltura(20)                   # obrigatorio
          ->setLargura(20)                  # obrigatorio
          ->setDiametro(0)                 # obrigatorio
          ->setPeso(0.300);                   # obrigatorio

 
      $resultPAC = clone $frete->calculate();

      $frete->setCodigoServico(Data::SEDEX);
      $resultSEDEX = clone $frete->calculate();

  }
  catch (FreteException $e) {
      // trate o erro adequadamente (e não escrevendo na tela)
      echo $e->getMessage();
      echo $e->getCode(); // este código é o código de erro dos correios
                          // pode ser usado pra dar mensagens como CEP inválido para o cliente
  }

}

?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slug clothings</title>
    <link rel="stylesheet" href="/css/product2.css" />
    <script src="/js/products.js" render></script>
    <style>

      .row {
  width: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 4vh;
  gap: 1vh;
  justify-content: center;
}
#icon_prefix {
  width: 42%;
  height: 3vh;
  border-radius: 0px;
}

#icon_prefix::placeholder {
  color: rgb(0, 0, 0);
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding: 1vh;
}

#alert {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
}

#pac-h5 {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
}

#sedex-h5 {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
}

#motoboy-h5 {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
}

#button-send {
  width: 42%;
  height: 3vh;
  background: #ffffff;
  color: #000000;
  font-weight: 900;
  font-family: "Open Sans", cursive, Arial, sans-serif;
}

#button-send:hover {
  background: #000000bb;
  color: #ffffff;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #eee;
  text-shadow: none;
}

#image-01 {
  width: 18vh;
  margin-right: 90vh;
}

#i {
  padding-right: 1vh;
  padding-bottom: 5vh;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

}

#i:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  
}


@media (max-width: 1100px) {
  .row {
  width: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  gap: 1vh;
  justify-content: center;
  align-items: center;
}

#infos {
  display: flex;
  flex-direction: column;
  align-items: center;
}


#icon_prefix {
  width: 100%;
  height: 5vh;
}

#icon_prefix::placeholder {
  color: rgb(0, 0, 0);
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding: 1vh;
  
}

#alert {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
  
}

#pac-h5 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
  
}

#sedex-h5 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  font-weight: bold;
  padding-bottom: 1vh;
  
}

#button-send {
  width: 23vh;
  height: 4vh;
  background: #ffffff;
  color: #000000;
  font-weight: 900;
  font-family: "Open Sans", cursive, Arial, sans-serif;
  
}

#button-send:hover {
  background: #000000bb;
  color: #ffffff;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #eee;
  text-shadow: none;
}

#image-01 {
    margin: 0 auto;
    width: 100%;
  }

  #alert {
    display: flex;
    text-align:  center;
    flex-direction: column;
    font-size: 15px;
    font-family: "Open Sans", cursive, Arial, sans-serif;
    font-weight: bold;
    padding-bottom: 1vh;
  }

  #pac-h5 {
    display: flex;
    text-align:  center;
    flex-direction: column;
    font-size: 15px;
    font-family: "Open Sans", cursive, Arial, sans-serif;
    font-weight: bold;
    padding-bottom: 1vh;
  }

  #sedex-h5 {
    display: flex;
    text-align:  center;
    flex-direction: column;
    font-size: 15px;
    font-family: "Open Sans", cursive, Arial, sans-serif;
    font-weight: bold;
  }


  #motoboy-h5{
    display: flex;
    text-align:  center;
    flex-direction: column;
    font-size: 15px;
    font-family: "Open Sans", cursive, Arial, sans-serif;
    font-weight: bold;
    padding-right: 5vh;
    padding-left: 5vh;
    padding-bottom: 10vh;
  }

}
    </style>
  </head>
  <body>
    <header class="header">
      <div id="header-sup">
        <a href="/php/buy.php" target="_blank"
          ><img src="/Img/carrinho.png" alt="cart" id="cart-image"
        /></a>
      </div>
      <div id="header-inf">
        <img src="/Img/SlugLogo.jpg" alt="slug-logo" id="slug-logo" />
      </div>
    </header>
    <main class="main-content">
      <div id="container">
        <div id="product">
          <div id="links">
            <a href="/php/index.php" id="i"
              >Início
              <a href="/php/product1.php">> Slug t-shirt Off-white</a></a
            >
          </div>
          <img
            src="/Img/produto-2.jpg"
            alt="image-product"
            id="image-product"
            onclick="trocarImagens()"
          />
        </div>
       <script src="/js/switchImg.js"></script>
        <div id="infos">
          <div id="name-price">  
            <p id="name-product">Slug t-shirt Off-white</p>
            <p id="price-product">R$ 199,90</p>
          </div>
          <div id="sizes">
            <label for="ProductSelect-option-0">Tamanho</label>
            <select
              name="single-option-selector"
              data-option="option1"
              id="ProductSelect-product-template-option-0"
            >
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
              <option value="XG">XG</option>
            </select>
          </div>
          <div id="button-buy">
            <button id="button" type="submit" onclick="Cart()">COMPRAR</button>
          </div>
          <form method="post">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix"></i>
                <input id="icon_prefix" name="cep"type="text" placeholder="Informe seu cep">
                
              </div>
              <div class="input-field col s6">
                <button id="button-send" type="submit"name="action">Calcular
                </button>
              </div>
            </div>
            <?php if(isset($_POST['cep'])) : ?>
            <div class="row">
              <div class="col s12">
                <h5 id="alert">Entrega para o Cep:<?php echo $cepDestino ?></h5>
                <h5 id="pac-h5">Pac: R$<?php echo $resultPAC ['cServico']['Valor']?>(Prazo: <?php echo $resultPAC ['cServico']['PrazoEntrega']?> dias úteis) </h5>
                <h5 id="sedex-h5">Sedex: R$<?php echo $resultSEDEX ['cServico']['Valor']?>(Prazo: <?php echo $resultSEDEX ['cServico']['PrazoEntrega']?> dias úteis) </h5>
                <h5 id="motoboy-h5">Tele-entrega: R$ 20,00 (Prazo: 1 dia útil)(Somente para caxias do sul e região)</h5>
              </div>
            </div>
            <?php endif; ?>
          </form>
        </div>
      </div>
      <div id="sub-container">
        <div id="images">
          <img
            src="/Img/tabela-de-medidas.jpg"
            alt="image-01"
            id="image-01"
            class="tabela-medidas"
            onclick="trocarImagens()"     
          />
        </div>
        <div id="infos-product">
          <h4 id="info-title">Produto</h4><br><br>
          <p id="descripiton">
            Confeccionada com malha 100% algodão penteado super premium. É uma peça com alta gramatura evitando transparência.<br><br> Possui um caimento de modelagem streetwear e uma gola de 3cm, oferecendo mais resistência e beleza por sua textura canelada.<br><br>
            Antes de comprar, atente-se com os tamanhos na nossa tabela de medidas, escolhendo o ideal para o seu gosto.<br><br>
            *os tamanhos podem sofrer uma pequena alteração de até 2 cm.<br><br><br><br><br><br><br><br>
          </p>
        </div>
        <div id="recommended">
          <p id="info-title">Produtos recomendados: </p> 
        </div> 

        <div id="product">
          <a href="/php/product1.php"><img src="/Img/produto-1.jpg" alt="product-1" id="product-1">
          <br>
          <div id="position">
            <p id="product-infos-2">Slug T-shirt black</p> 
            <p id="product-infos-2">R$ 199,90</p>
           </a>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div id="contacts">
        <a href="https://www.instagram.com/slug_br/"
          ><img src="/Img/instagram.png" alt="icon" id="icon-insta"/>
      </div>
      <div id="authors">
        <p>DIREITOS RESERVADOS © 2023 - <a href="/php/index.php"><p>SLUG</p></a>
        </div>
    </footer>
  </body>
    
</html>

