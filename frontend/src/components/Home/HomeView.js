import SideMenu from "../Global/SideMenu";
import SearchBar from "../Global/SearchBar";
import Footer from "../Global/Footer";
import Logged from "../Global/Logged";
import { useContext } from "react";
import { LogContext } from "../../context/LogContext";

export default function HomeView() {
    const { value, setValue } = useContext(LogContext);
    return (
        <>
            <SideMenu></SideMenu>
            {value ? <Logged></Logged> : ""}
            <div className="container-top">
                <div className="logo">
                    <img src="/Logo.png" alt="logo" />
                    <h5>Read, learn and travel. For those people that want to share experiences...</h5>
                </div>
                <SearchBar></SearchBar>
            </div>

            <div className="container-bottom" >
                <div className="earth-model">
                    <img src="/img/earth-model.png" alt="3d-model"></img>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}