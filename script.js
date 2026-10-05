/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,

        name: "Wireless Headphones",

        category: "Electronics",

        price: 2499,

        oldPrice: 3999,

        rating: 4.8,

        reviews: 124,

        discount: 38,

        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",

        description:
            "Enjoy crystal-clear sound with these premium wireless headphones. Perfect for music, gaming and everyday use."
    },


    {
        id: 2,

        name: "Smart Watch",

        category: "Electronics",

        price: 3999,

        oldPrice: 5999,

        rating: 4.7,

        reviews: 98,

        discount: 33,

        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",

        description:
            "Track your fitness, notifications and daily activities with this stylish modern smartwatch."
    },


    {
        id: 3,

        name: "Classic T-Shirt",

        category: "Fashion",

        price: 799,

        oldPrice: 1299,

        rating: 4.5,

        reviews: 210,

        discount: 38,

        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",

        description:
            "A comfortable classic cotton T-shirt designed for everyday wear."
    },


    {
        id: 4,

        name: "Running Shoes",

        category: "Shoes",

        price: 2999,

        oldPrice: 4499,

        rating: 4.9,

        reviews: 186,

        discount: 33,

        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",

        description:
            "Lightweight running shoes designed for comfort, performance and everyday activities."
    },


    {
        id: 5,

        name: "Leather Backpack",

        category: "Accessories",

        price: 1899,

        oldPrice: 2999,

        rating: 4.6,

        reviews: 87,

        discount: 37,

        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",

        description:
            "A stylish and durable backpack with plenty of space for your daily essentials."
    },


    {
        id: 6,

        name: "Premium Sunglasses",

        category: "Accessories",

        price: 999,

        oldPrice: 1599,

        rating: 4.4,

        reviews: 75,

        discount: 38,

        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",

        description:
            "Modern sunglasses with a stylish design suitable for everyday outdoor use."
    },


    {
        id: 7,

        name: "Premium Sneakers",

        category: "Shoes",

        price: 3499,

        oldPrice: 4999,

        rating: 4.8,

        reviews: 143,

        discount: 30,

        image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",

        description:
            "Premium sneakers combining modern design with excellent comfort."
    },


    {
        id: 8,

        name: "Denim Jacket",

        category: "Fashion",

        price: 2199,

        oldPrice: 3299,

        rating: 4.6,

        reviews: 92,

        discount: 33,

        image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",

        description:
            "A timeless denim jacket that works perfectly with casual and everyday outfits."
    },


    {
        id: 9,

        name: "Bluetooth Speaker",

        category: "Electronics",

        price: 1799,

        oldPrice: 2499,

        rating: 4.7,

        reviews: 115,

        discount: 28,

        image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",

        description:
            "Portable Bluetooth speaker delivering powerful sound in a compact design."
    },


    {
        id: 10,

        name: "Casual Hoodie",

        category: "Fashion",

        price: 1499,

        oldPrice: 2299,

        rating: 4.5,

        reviews: 76,

        discount: 35,

        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",

        description:
            "Stay warm and comfortable with this stylish everyday hoodie."
    }

];


/* =========================================
   VARIABLES
========================================= */

let cart = [];

let selectedCategory = "All";


/* =========================================
   DOM ELEMENTS
========================================= */

const productsGrid =
    document.getElementById("productsGrid");

const productCount =
    document.getElementById("productCount");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const overlay =
    document.getElementById("overlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const cartItemsText =
    document.getElementById("cartItemsText");

const emptyCart =
    document.getElementById("emptyCart");

const cartFooter =
    document.getElementById("cartFooter");

const continueShopping =
    document.getElementById("continueShopping");

const checkoutButton =
    document.getElementById("checkoutButton");

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");

const shopNow =
    document.getElementById("shopNow");


/* =========================================
   FORMAT PRICE
========================================= */

function formatPrice(price) {

    return "₹" +
        price.toLocaleString("en-IN");

}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList) {

    productsGrid.innerHTML = "";


    productCount.textContent =
        `${productList.length} Products`;


    if (productList.length === 0) {

        noProducts.style.display = "block";

        return;

    }


    noProducts.style.display = "none";


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-container">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="discount">
                    -${product.discount}%
                </span>

                <button
                    class="view-button"
                    onclick="openProduct(${product.id})"
                    title="View product"
                >
                    👁️
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">
                    ⭐ ${product.rating}
                    <span>
                        (${product.reviews})
                    </span>
                </div>


                <div class="price-row">

                    <div>

                        <span class="price">
                            ${formatPrice(product.price)}
                        </span>

                        <span class="old-price">
                            ${formatPrice(product.oldPrice)}
                        </span>

                    </div>

                </div>


                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                    style="width:100%; margin-top:12px;"
                >
                    Add to Cart
                </button>

            </div>
        `;


        productsGrid.appendChild(card);

    });

}


/* =========================================
   FILTER PRODUCTS
========================================= */

function filterProducts() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    let filteredProducts =
        products.filter(product => {

            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;


            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    displayProducts(filteredProducts);

}


/* =========================================
   CATEGORY BUTTONS
========================================= */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".category")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                this.classList.add("active");


                selectedCategory =
                    this.dataset.category;


                filterProducts();

            }
        );

    });


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    filterProducts
);


searchBtn.addEventListener(
    "click",
    filterProducts
);


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const product =
        products.find(
            product =>
                product.id === productId
        );


    if (!product) return;


    const existingItem =
        cart.find(
            item =>
                item.id === productId
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();


    openCart();

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartItems.innerHTML = "";


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    cartItemsText.textContent =
        `${totalQuantity} ${
            totalQuantity === 1
                ? "item"
                : "items"
        }`;


    cartTotal.textContent =
        formatPrice(totalPrice);


    if (cart.length === 0) {

        emptyCart.classList.add("show");

        cartFooter.style.display =
            "none";

        return;

    }


    emptyCart.classList.remove("show");

    cartFooter.style.display =
        "block";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                class="cart-item-image"
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-item-price">
                    ${formatPrice(item.price)}
                </div>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(
                        ${item.id}
                    )"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    item.id !== productId
            );

    }


    updateCart();

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartSidebar.classList.add("open");

    overlay.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE CART
========================================= */

function closeCartSidebar() {

    cartSidebar.classList.remove("open");

    overlay.classList.remove("active");

    document.body.style.overflow =
        "";

}


cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


overlay.addEventListener(
    "click",
    closeCartSidebar
);


continueShopping.addEventListener(
    "click",
    closeCartSidebar
);


/* =========================================
   PRODUCT DETAILS
========================================= */

function openProduct(productId) {

    const product =
        products.find(
            product =>
                product.id === productId
        );


    if (!product) return;


    modalContent.innerHTML = `

        <img
            class="modal-image"
            src="${product.image}"
            alt="${product.name}"
        >


        <div class="modal-info">

            <span class="product-category">
                ${product.category}
            </span>

            <h2>
                ${product.name}
            </h2>

            <div class="rating">
                ⭐ ${product.rating}

                <span>
                    (${product.reviews} reviews)
                </span>
            </div>

            <div class="modal-price">
                ${formatPrice(product.price)}
            </div>

            <p>
                ${product.description}
            </p>

            <button
                class="modal-add"
                onclick="addToCart(${product.id}); closeProductModal();"
            >
                Add to Cart
            </button>

        </div>

    `;


    productModal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE PRODUCT MODAL
========================================= */

function closeProductModal() {

    productModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            productModal
        ) {

            closeProductModal();

        }

    }
);


/* =========================================
   CHECKOUT
========================================= */

checkoutButton.addEventListener(
    "click",
    function() {

        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.price *
                    item.quantity,
                0
            );


        alert(
            "🎉 Order placed successfully!\n\n" +
            "Total: " +
            formatPrice(total) +
            "\n\nThank you for shopping with ShopEase!"
        );


        cart = [];

        updateCart();

        closeCartSidebar();

    }
);


/* =========================================
   SHOP NOW
========================================= */

shopNow.addEventListener(
    "click",
    function() {

        document
            .getElementById("productsSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCartSidebar();

            closeProductModal();

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayProducts(products);

updateCart();
