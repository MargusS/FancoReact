import SideMenu from "../Global/SideMenu";
import SearchBar from "../Global/SearchBar";
import Footer from "../Global/Footer";
import Logged from "../Global/Logged";
import { useContext } from "react";
import { LogContext } from "../../context/LogContext";
import LogoHeader from "../Global/LogoHeader";

export default function Posts() {
  const { value, setValue } = useContext(LogContext);
  return (
    <>
      <div className="header">
        <SideMenu></SideMenu>
        <LogoHeader></LogoHeader>
      </div>
      <div className="body">
        <div className="country">
          <div className="country-shape">
            <h4>Spain</h4>
            <img src="/img/spain.png" />
          </div>
          <div className="country-info">
            <SearchBar></SearchBar>
            <h3>Capital: <span>Madrid</span></h3>
            <h3>Language: <span>Spanish</span></h3>
            <h3>Famous Places: <span>El Teide, El Prado</span></h3>
          </div>
        </div>
        <div className="posts">

        </div>
        <Footer></Footer>
      </div>


    </>
  )
}