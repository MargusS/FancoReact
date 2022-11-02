import { SmileOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { Button } from 'antd'
import SideMenu from "../Global/SideMenu";
import SearchBar from "../Global/SearchBar";
import Footer from "../Global/Footer";
import Logged from "../Global/Logged";
import { useContext } from "react";
import { LogContext } from "../../context/LogContext";
import LogoHeader from "../Global/LogoHeader";
import { useEffect, useState } from 'react';

export default function Posts() {
  const { value, setValue } = useContext(LogContext);
  const [info, setInfo] = useState({});
  let { country } = useParams();

  useEffect(() => {
    getData()
  }, [country])

  const getData = () => {
    fetch('/countries.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setInfo(myJson[`${country}`])
      });
  }

  return (
    <>
      <div className="header">
        <SideMenu></SideMenu>
        <LogoHeader></LogoHeader>
      </div>
      <div className="body">
        {
          typeof info.id !== 'undefined' ?
            <div className="country">
              <div className="country-shape">
                <h4>{country.toUpperCase()}</h4>
                <img src={info.img} />
              </div>
              <div className="country-info">
                <SearchBar></SearchBar>
                <div className="info">
                  <h3>Capital: <span>{info.info[0].capital}</span></h3>
                  <h3>Language: <span>{info.info[0].language}</span></h3>
                  <h3>Famous Places: <span>{info.info[0].places.map(place => place + " | ")}</span></h3>
                </div>

              </div>
            </div>
            : "..."
        }
        {value ? <Logged></Logged> : ""}
        {
          typeof info.id !== 'undefined' ?
            <div className='posts-list'>
              {info.posts.map(post =>
                <div className="post-container">

                  <div className="post">
                    <div className="post-logo">
                      <img src='/img/imagen.png' />
                    </div>
                    <div className="post-content">
                      <h4>{country.toUpperCase()}</h4>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                    </div>
                  </div>
                  <div className="post-options">
                    <div className="user-post">
                      <SmileOutlined style={{ fontSize: '1.7em', color: '#b2fcfb' }} />
                      <p>User</p>
                    </div>
                    <div className='options-btn'>
                      <p>20</p>
                      <Button type="text"><HeartOutlined size="small" style={{ fontSize: '1.7em', color: '#57369a' }} /></Button>
                      <Button type="text"><ShareAltOutlined size="small" style={{ fontSize: '1.7em', color: '#fff' }} /></Button>
                    </div>
                  </div>
                </div>

              )}
            </div>
            : "..."
        }
        <Footer></Footer>
      </div>


    </>
  )
}