import SideMenu from "../Global/SideMenu";
import SearchBar from "../Global/SearchBar";
import Footer from "../Global/Footer";

export default function HomeView() {
    return (
        <>
            <SideMenu></SideMenu>
            <div className="logo">
                <img src="/Logo.png" />
                <h5>Read, learn and travel. For those people that want to share experiences...</h5>
            </div>
            <SearchBar></SearchBar>
            <div className="earth-model">
                <img src="/img/earth-model.png"></img>
            </div>
            <Footer></Footer>
        </>
    )
}