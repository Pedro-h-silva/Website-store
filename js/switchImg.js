function personalizarTabela() {
  let tabelaMedidas = document.getElementById("image-01");

  // Verifica se a tabela de medidas está sendo exibida
  if (tabelaMedidas.classList.contains("tabela-medidas")) {
    tabelaMedidas.style.width = "18vh";
    tabelaMedidas.style.paddingBottom = "2vh";
  }
}

function trocarImagens() {
  let tabelaMedidas = document.getElementById("image-01");
  let camisa = document.getElementById("image-product");

  if (tabelaMedidas.classList.contains("tabela-medidas")) {
    // Troca a imagem da tabela de medidas pela imagem da camisa
    let tabelaSrc = tabelaMedidas.src;
    tabelaMedidas.src = camisa.src;
    camisa.src = tabelaSrc;

    personalizarTabela();
  }
}
