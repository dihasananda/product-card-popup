const container = document.getElementById("products-preview");
const test = document.getElementById("test");
const productId = new URLSearchParams(location.search).get("id")
const product = "https://dummyjson.com/products/" + productId;

fetch(product)
    .then(res => res.json())
    .then(item => {
        container.innerHTML += content(item);
    })

const content = (item) => {
    return `
        <div class="preview">
          <i class="fas fa-times" onclick="history.back()"></i>
          <img src="${item.images[0]}" alt="">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="price">$${item.price}</div>
          <div class="buttons">
             <a href="#" class="buy">buy now</a>
             <a href="#" class="cart">add to cart</a>
          </div>
       </div>
        `
}