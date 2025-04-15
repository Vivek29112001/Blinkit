// import Header from "../components/Header";
import ProductList from "../components/ProductList";
const Home = () => {
    return (
        <div className="main-home">
            <div className="upper-div">

                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="Blinkit Banner" />

            </div>
            <div className="image-all">
                    <div className="image-1">
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="Blinkit Banner" />

                    </div>
                    <div className="image-2">
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="Blinkit Banner" />

                    </div>
                    <div className="image-3">
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="Blinkit Banner" />

                    </div>
                </div>

            <div className="fresh item">
                <h2> Fresh Items</h2>
                <ProductList/>
            </div> 
            <div className="daily-item">
                <h2> Daily Food Item</h2>
                <ProductList/>
            </div>
            <div className="Lower-div">
                <ProductList />
            </div>
            <div className="snacks">
            <h1>snakers </h1>
            <ProductList/>/
            </div>
        </div>

    )
}

export default Home;