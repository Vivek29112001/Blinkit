import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import "./CSS/ProductList.css"
import { fetchAllProducts } from "./api/products";

const useQuery = () => new URLSearchParams(useLocation().search)

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const query = useQuery();
    const searchTerm = query.get('search')?.toLowerCase() || '';
    useEffect(() => {
        fetchAllProducts()
            .then(res => setProducts(res.data.products))
    }, []);
    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm));
    return (
        <div className="product-container">
            {filtered.map(p =>
                <ProductCard key={p.id} product={p} />
            )}
        </div>
    )
}
export default ProductList;