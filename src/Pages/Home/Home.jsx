import Banner from "./Banner";
import Gallery from "./Gallery";
import Products from "./Products/Products";
import Questions from "./Questions";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Products/>
            <Questions/>
        </div>
    );
};

export default Home;