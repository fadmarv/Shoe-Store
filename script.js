let productPage = document.getElementById('productPage')
// let Name = document.getElementById('name')
let image = document.getElementById('image')
let product = document.getElementById('products')
// let price = document.getElementById('price')
let cancel = document.getElementById('cancel')


const products = (event) => {
    productPage.style.display = 'block';
    product.style.display = 'flex';
    image.src = event.target.currentSrc;
    cancel.style.display = 'block';
    // console.log(event)

    if (event.target.tagName === 'IMG') {
        const listItem = event.target.closest('li');

        const Name = listItem.querySelector('h2');
        const price = listItem.querySelector('p');

        displayProductsDetail(Name , price)
    }
}

const displayProductsDetail = (name , Price) => {
    document.getElementById('name').innerHTML = name.innerHTML;
    document.getElementById('price').innerHTML = Price.innerHTML    ;

    console.log(name)
}

const Close = () => {
    productPage.style.display = 'none';
    product.style.display = 'none';
    cancel.style.display = 'none';
}