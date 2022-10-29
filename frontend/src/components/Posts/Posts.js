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
        <div className="posts"></div>
        <Footer></Footer>
      </div>


    </>
  )
}