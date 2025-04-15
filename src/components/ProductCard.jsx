import { Link } from "react-router-dom";
import "./CSS/ProductCart.css";

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.images} alt={product.title} width="120" height="120" />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
);

export default ProductCard;
