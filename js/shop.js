fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {

    const fourProducts = products.slice(16,20);

    fourProducts.forEach(product => {
        let blockCart = document.querySelector('.pro-container');

        let creatingCartBlock = document.createElement('div');
        creatingCartBlock.classList.add('pro')

        let createImage = document.createElement('img');
        createImage.src = product.image;
        createImage.classList.add('E')
    
        let createTittle = document.createElement('h5');
        createTittle.textContent = product.title;

        let createBio = document.createElement('p');
        createBio.textContent = product.description.slice(0,30) + "...";

        let createPrice = document.createElement('h4');
        createPrice.textContent = product.price + "€";
        createPrice.classList.add('fetchPrice');

        let createButton = document.createElement('button');
        createButton.innerHTML = '<i class="fa-solid fa-cart-shopping "></i>'
        createButton.classList.add('cart');

        creatingCartBlock.appendChild(createImage);
        creatingCartBlock.appendChild(createTittle);
        creatingCartBlock.appendChild(createBio);
        creatingCartBlock.appendChild(createPrice);
        creatingCartBlock.appendChild(createButton);
        blockCart.appendChild(creatingCartBlock);
        console.log(creatingCartBlock);

    creatingCartBlock.addEventListener('click', () => {
        window.location.href = `single.html?id=${product.id}`;
    })

    createButton.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    }) 

    });
});