let cart = JSON.parse(localStorage.getItem("cart")) || [];
const getProductPossitions = document.getElementById('cartItems')

cart.forEach(product => {
    let item = document.createElement("div");
    item.classList.add("cart-item");

    let img = document.createElement("img");
    img.src = product.image;

    let title = document.createElement("h4");
    title.textContent = product.title;

    let price = document.createElement("p");
    price.textContent = product.price + " €";

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(price);

    cartItems.appendChild(item);
});

window.onload = () => {
 
};

if (cart.length == 0) {
    getProductPossitions.innerHTML = `<p>Cart is empty</p>`
}

let getTottal = document.getElementById('total');

let total = 0;
cart.forEach(item => {
    total += Number(item.price);
})
getTottal.textContent = total + "€";