import logo from "./images/logo.png";
import "reset-css";
import "./css/Header.scss";
import "./css/Main.scss";
import React, { useEffect } from "react";

import videoSrc from "./video/out.mp4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

import Main from "./menu/main/main";
import Movie from "./menu/movie/movie";

const App = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
    document.getElementsByTagName("head")[0].appendChild(meta);

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
            <video loop muted autoPlay playsInline>
              <source src={videoSrc}></source>
            </video>
          </div>
          <div className="Container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/MORE" element={<Main />} />
              <Route path="movie" element={<Movie />} />
              <Route path="users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

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
