'use strict';

// Define the constructor function for a product object
function Product(name, imagepath){
    this.name = name;
    this.imagePath =imagepath;
    this.timeShown = 0;
    this.timesClicked = 0;
}

// Create an array of Product Objects to represent the products being used
const products = [
    new Product('Product 1', 'images/product1.jpg')
    new Product('Product 2', 'images/product2.jpg')
    new Product('Product 3', 'images/product3.jpg')
    new Product('Product 4', 'images/product4.jpg')
    new Product('Product 5', 'images/product5.jpg')
    new Product('Product 6', 'images/product6.jpg')
    new Product('Product 7', 'images/product7.jpg')
    new Product('Product 8', 'images/product8.jpg')
    new Product('Product 9', 'images/product9.jpg')
    
];

// Define a variable to control the number of rounds of voting
const numRounds = 25;

// Define a function to randomly select three unique products and display them on the page
function displayProducts(){
    const productIndices = [];
    while (produceIndices.length < 3){
        const index = Math.floor(Math.random()* products.legnth);
        if (!productIndices.includes(index)){
            productIndices.push(index);
        }
    }

    const productElements = productIndices.map((index) => {
        const product = products[index];
        product.timesShown++;
        return `<img src="${product.imagePath}" alt="${product.name}" class="product-image" data-product-index="${index}">`;
    });

    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = productElements.join('');
};

// Define a function to handle a user click on a product image
function handleProductClick(event){
    const index = parseInt(event.target.dataset.productIndex);
    const product = products[index];
    product.timesClicked++;
    displayProducts();
}

// Attach the event listener to the products container
const productsContainer = document.getElementById('products-container');
productsConatainer.addEventListener('click', handleProductClick);

// Display the initial set of products
displayProducts();

// Define a function to generate a report of the results
function generateResultsReports(){
    const results = products.map ((product) =>{
        return `${product.name} had ${product.timesClicked} votes, and was seen ${product.timesShown} times.`
    });
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = results.join('<br>');
}

// Define a function to end the voting session and show the results
function endVotingSession(){
    productsContainer.removeEventListener('click', hanldeProductClick);
    generateResultsReports();
}

// Add a button to end the voting session and show the results
const endButton = document.getElementById('end-button');
endButton.addEventListener('click', endVotingSession);