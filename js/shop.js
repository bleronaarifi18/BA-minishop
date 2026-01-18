fetch("https://dummyjson.com/products/category/womens-dresses")//fetch products
  .then(res => res.json())
  .then(data => {
    //slice products
    const fourProducts = data.products.slice(0,4);
    const blockCart = document.querySelector('.pro-container');

    //creating cards
    fourProducts.forEach(product => {

        let creatingCartBlock = document.createElement('div');
        creatingCartBlock.classList.add('pro');

        let createImage = document.createElement('img');
        createImage.src = product.thumbnail;

        let createTitle = document.createElement('h5');
        createTitle.textContent = product.title;

        let createBio = document.createElement('p');
        createBio.textContent = product.description.slice(0,30) + "...";

        let createPrice = document.createElement('h4');
        createPrice.textContent = product.price + "€";
        createPrice.classList.add('fetchPrice');

        let createButton = document.createElement('button');
        createButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
        createButton.classList.add('cart');

        creatingCartBlock.append(
          createImage,
          createTitle,
          createBio,
          createPrice,
          createButton
        );

        blockCart.appendChild(creatingCartBlock);

        // redirect single page
        creatingCartBlock.addEventListener('click', () => {
          window.location.href = `single.html?id=${product.id}`;
        });

        // add to cart
        createButton.addEventListener('click', (e) => {
          e.stopPropagation(); // mos me bo redirect
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
        });

    });
  })
  .catch(err => console.error(err));