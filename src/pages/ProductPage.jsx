import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const { addToCart } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)  //Dummy api
            .then(res => setProduct(res.data))
    }, [id]);


    const handleAddToCart = () => {
        addToCart(product,()=>{
            navigate("/cart")
        })
    }

    if (!product) return <p>Loading....</p>
    return (
        <div className="product-page-container">
            <img
                src={product.images}
                alt={product.title}
                width="200"
            />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button
                onClick={handleAddToCart }>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductPage;