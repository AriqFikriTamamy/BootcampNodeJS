const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 700 }
];

const discountedProducts = products.map(product => ({
    ...product, price: product.price * 0.9
}));
console.log(discountedProducts);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);