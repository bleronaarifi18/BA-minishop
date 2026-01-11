const parms = new URLSearchParams(window.location.search);
const productId = parms.get("id");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {

    let changeImage = document.getElementById('product-image').src = product.image;
    let changeText = document.getElementById('product-title').textContent = product.title;
    let changeBio = document.getElementById('product-description').textContent = product.description;
    let changePrice = document.getElementById('product-price').textContent = product.price;

    document.getElementById("add-to-cart").addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    })

});