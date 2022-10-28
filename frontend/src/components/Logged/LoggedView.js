import SideMenu from "../Global/SideMenu";
import { SmileOutlined } from '@ant-design/icons';
import SearchBar from "../Global/SearchBar";
import Footer from "../Global/Footer";

export default function LoggedView() {

    return (
        <>
            <SideMenu></SideMenu>
            <div className="account">
                <p>Your Account</p>
                <SmileOutlined style={{ fontSize: '1.7em', color: '#b2fcfb' }} />
            </div>
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