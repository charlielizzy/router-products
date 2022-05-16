import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        setProduct(data);
    }

    // products.map(() => {

    // })

    return (
        <div>
        <h1>ID: {product.id}</h1>
        <h2>Title: {product.title}</h2>
        <h3>Price: £{product.price.toFixed(2)}</h3>
        <h4>Description: {product.description}</h4>
        <h5>Category: {product.category}</h5>
        <h6>Rating: Rated {product.rating.rate} by {product.rating.count} customers</h6>
        <img src={product.image}/>
    </div>
    );
};

export default Products;