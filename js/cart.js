//get elements from local stroage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const getProductPossitions = document.getElementById('cartItems')


//creating product section in cart
cart.forEach(product => {
    let item = document.createElement("div");
    item.classList.add("cart-item");

    let img = document.createElement("img");
    img.src = product.thumbnail;

    let title = document.createElement("h4");
    title.textContent = product.title;

    let price = document.createElement("p");
    price.textContent = product.price + " €";

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(price);

    cartItems.appendChild(item);
});

//after click in cart  is executed 
window.onload = () => {
 
};


//if 0 products are in cart : cart is empty
if (cart.length == 0) {
    getProductPossitions.innerHTML = `<p>Cart is empty</p>`
}


//total value
let getTottal = document.getElementById('total');

let total = 0;
cart.forEach(item => {
    total += Number(item.price);
})
getTottal.textContent = total + "€";