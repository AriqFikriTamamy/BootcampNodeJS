const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [{
        id: 1,
        name: 'Laptop',
        category: 'Elektronik'
    },
    {
        id: 2,
        name: 'Meja',
        category: 'Perabotan'
    }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            message: 'Product not found'
        })
    }
});

app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== 1) {
        products[productIndex] = {
            id: productId,
            ...req.body
        };
        res.json(products[productIndex])
    } else {
        res.status(404).json({
            message: 'Product not found'
        })
    };
});

app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

app.get('/api/products/search', (req, res) => {
    console.log("Request received at /api/products/search");
    const {
        name
    } = req.query;
    console.log("Query parameter 'name':", name);
    console.log("Products array:", products);
    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Query parameter 'name' is required"
        })
    }
    const trimmedName = name.trim();
    let matchingProducts = products.filter(product => product.name.toLowerCase().includes(trimmedName.toLowerCase()));
    console.log("Matching products:", matchingProducts);
    if (matchingProducts.length > 0) {
        res.json(matchingProducts);
    } else {
        res.status(404).json({
            message: 'Product not found'
        })
    }
});

app.listen(port, () => {
    console.log(`Server running at <http://localhost:${port}>`);
});