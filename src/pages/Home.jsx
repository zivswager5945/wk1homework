import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

function Home(){
    return (
        <div className="main-layout">
        <Header className="layout-header"/>
        <Container className="layout-content"/>
        <Footer className="layout-footer"/>
    </div>
    );
}

export default Home;