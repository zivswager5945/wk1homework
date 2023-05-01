import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import { useProducts } from "../react-query";

function Home(){

    const { data, isLoading } = useProducts();
    const products = data || [];

    return (
        <div className="main-layout">
        <Header className="layout-header"/>
        <Container
                products={products}
                isLoading={isLoading} 
                className="layout-content"
                
        />
        <Footer className="layout-footer"/>
    </div>
    );
}

export default Home;