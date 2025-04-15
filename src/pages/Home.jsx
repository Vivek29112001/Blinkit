import ProductList from "../components/ProductList";
import "./CSS/Home.css"; // New CSS file for home-specific styles

const Home = () => {
    return (
        <div className="main-home">
            <div className="upper-div">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="Blinkit Banner" />
            </div>

            <div className="image-all">
                <div className="image-1">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="Pharmacy" />
                </div>
                <div className="image-2">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="Pet Care" />
                </div>
                <div className="image-3">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="Babycare" />
                </div>
            </div>

            <div className="category">
                <h2>Fresh Items</h2>
                <div className="scroll-row">
                    <ProductList />
                </div>
            </div>

            <div className="category">
                <h2>Daily Food Items</h2>
                <div className="scroll-row">
                    <ProductList />
                </div>
            </div>

            <div className="category">
                <h2>Snakers</h2>
                <div className="scroll-row">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default Home;
