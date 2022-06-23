const container = document.getElementById("products-container");
const test = document.getElementById("test");

const product = "https://dummyjson.com/products?limit=100&select=id,title,price,images";

fetch(product)
    .then(res => res.json())
    .then(json => json.products)
    .then(products => {
        products.map(item => {
            container.innerHTML += contentCard(item);
        })
    })

const contentCard = (item) => {
    return `
        <div class="product" onclick="location = 'product.html?id=${item.id}'">
            <img src="${item.images[0]}" alt="">
            <h3>${item.title}</h3>
            <div class="price">$${item.price}</div>
        </div>
        `
}