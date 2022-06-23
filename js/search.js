const container = document.getElementById("products-container");
const searchCount = document.getElementById("search-count");
const test = document.getElementById("test");
const search = location.search
const product = "https://dummyjson.com/products/search"+search;
const searchbox = document.getElementById("searchTerm")

searchbox.value = new URLSearchParams(search).get('q');

const getsomething = fetch(product)
    .then(res => res.json())
    .then(json => {
        if(json.total) {
            searchCount.innerHTML = 'We get '+json.total+' result.'
            json.products.map(item => {
                container.innerHTML += contentCard(item);
            })
        } else {
            container.innerHTML = '<p>Sorry, no results containing all your search terms were found.</p>'
        }

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