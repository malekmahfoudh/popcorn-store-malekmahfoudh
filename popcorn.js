let availablePopcorns = [];
let popcornsInCart = [];

async function getPopcorn() {
    let popcorns = await fetch('products.json');
    popcorns = await popcorns.json();
    renderPopcornToUi(popcorns);
}
getPopcorn();

function renderPopcornToUi(popcorns) {
    let popcornContainerEl = document.querySelector('.popcorn-container');

    popcorns.forEach(popcorn => {
        popcornContainerEl.innerHTML += `
        <article class="popcorn-card">
            <img class="popcorn-bag__img" src="/img/${popcorn.img}">
                <section class="popcorn-info__text">
                    <h2 class="popcorn-info__name">${popcorn.name}</h2>
                    <p>${popcorn.desc}</p>
                    <p>Price/hg: ${popcorn.pricePerHekto} SEK </p>
                </section>
            <section class="popcorn-characteristics">
                <p>Size: ${popcorn.characteristics.size}</p> 
                <p>Flavour: ${popcorn.characteristics.flavour}</p> 
                <p>Hardness: ${popcorn.characteristics.size}</p>    
            </section>
            <button class="add-to-cart-btn">ADD TO CART</button>
        </article>`
        
        buttonEl = document.querySelectorAll('.add-to-cart-btn').forEach(buttonEl => {
            buttonEl.addEventListener('click', () => {
                popcornsInCart.push(popcorn)
                console.log(popcornsInCart)
            });
        });
    });
}



