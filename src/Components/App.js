import logo from "./images/logo.png";
import "reset-css";
import "./css/Header.scss";
import "./css/Main.scss";
import React, { useState, useEffect } from "react";

import videoSrc from "./video/out.mp4";
import customAxios from "./customAxios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

import Movie from "./menu/movie/movie";

function App() {
  useEffect(() => {
    const mainMenu = document.querySelectorAll(".main-menu>li");
    mainMenu.forEach((menu) => {
      menu.addEventListener("mouseenter", (e) => {
        menu.classList.add("active");
      });
      menu.addEventListener("mouseleave", (e) => {
        menu.classList.remove("active");
      });
    });
  }, []);

  return (
    <Router>
      <div className="Wrap">
        <div className="Header">
          <div className="Container">
            <div className="logo-menu">
              <nav>
                <Link to="/">
                  <img className="logo" src={logo} alt="로고" />
                </Link>
                <ul className="main-menu">
                  <li>
                    <Link to="/">홈</Link>
                  </li>
                  <li>
                    <Link to="/movie">영화</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/movie">소메뉴1</Link>
                      </li>
                      <li>
                        <Link to="/movie">소메뉴2</Link>
                      </li>
                      <li>
                        <Link to="/movie">소메뉴3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/users">드라마</Link>
                  </li>
                </ul>
              </nav>
              <div className="right">
                <ul>
                  <li>
                    <Link to="/">로그인</Link>
                  </li>
                  <li>
                    <Link to="/">회원가입</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="search"
                      icon={faSearch}
                      size="1x"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Main">
          <div className="Background-video">
            <div>
              <h1>MORE</h1>
              <h2>All Reviews.</h2>
            </div>
            <video loop muted autoPlay>
              <source src={videoSrc}></source>
            </video>
          </div>
          <div className="Container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="movie" element={<Movie />} />
              <Route path="users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

function Main() {
  return <div></div>;
}

function Users() {
  return (
    <div>
      <hr />
      <h2>사용자 페이지</h2>
      <div className="parent">
        <div className="child"></div>
      </div>
      <div className="friend"></div>
    </div>
  );
}
