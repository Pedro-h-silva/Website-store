function buy() {
  const name = document.getElementById("name-product").textContent;
  const price = document.getElementById("price-product").textContent;
  const size = document.getElementById(
    "ProductSelect-product-template-option-0"
  ).value;
  const image = document.getElementById("image-product").src;

  const product = {
    name: name,
    price: price,
    size: size,
    image: image,
  };

  const redirectUrl = `/Buynow/buy.html?product=${encodeURIComponent(
    JSON.stringify(product)
  )}`;
  window.location.href = redirectUrl;
  console.log(product);
}
