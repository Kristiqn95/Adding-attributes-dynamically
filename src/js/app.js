import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

  const products = document.getElementsByClassName('product');

  for (let element of products) {
    element.dataset.price = element.getElementsByClassName('price')[0].innerText;
  }
});
