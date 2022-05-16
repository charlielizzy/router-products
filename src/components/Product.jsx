import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchProducts();
    }, [])

    const params = useParams();    
    const fetchProducts = async () => {
        try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.productid}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        } catch (error) {
        setError(true)
        setLoading(false);
        }
         
    }

    console.log(product)

    if (loading === true) {
        return <h1>Loading...</h1>}

    if (error === true) {
        return <h1>Ooops! Error!</h1>
    }

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
    )
    
}

export default Product