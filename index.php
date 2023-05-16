<?php

require "./vendor/autoload.php";

use EscapeWork\Frete\Correios\PrecoPrazo;
use EscapeWork\Frete\Correios\Data;
use EscapeWork\Frete\FreteException;

$frete = new PrecoPrazo();
$frete->setCodigoServico(Data::SEDEX)
      ->setCepOrigem('95043273')   # apenas numeros, sem hifen(-)
      ->setCepDestino('07500000') # apenas numeros, sem hifen(-)
      ->setComprimento(30)              # obrigatorio
      ->setAltura(5)                   # obrigatorio
      ->setLargura(20)                  # obrigatorio
      ->setDiametro(30)                 # obrigatorio
      ->setPeso(0.3);                   # obrigatorio

try {
    $result = $frete->calculate();

    echo $result['cServico']['Valor'];
    echo $result['cServico']['PrazoEntrega'];

    var_dump($result); // debugge o resultado!
}
catch (FreteException $e) {
    // trate o erro adequadamente (e não escrevendo na tela)
    echo $e->getMessage();
    echo $e->getCode(); // este código é o código de erro dos correios
                        // pode ser usado pra dar mensagens como CEP inválido para o cliente
}