import logo from './images/main-logo.png';
import './css/Header.scss'
import 'reset-css';
import React, { useState, useEffect } from 'react';
import customAxios from './customAxios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='Header'>
        <Link to="/movie">
          <img
            className='logo'
            src={logo}
            alt='로고'
          />
        </Link>
        
        <nav>
          <ul className='main-menu'>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
              <ul className='sub-menu'>
                <li><Link to="/movie">소메뉴1</Link></li>
                <li><Link to="/movie">소메뉴2</Link></li>
                <li><Link to="/movie">소메뉴3</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/users">사용자</Link>
            </li>
          </ul>
        </nav>


      </div>
    </Router>
  );
}

export default App;

function Main() {
  // IP주소 변수 선언
  const [ip, setIp] = useState('');

  // IP주소 값을 설정합니다.
  function callback(data) {
      setIp(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
      () => {
          // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
          customAxios('/ip', callback);
      }, []
  );

  return (
      <header className="App-header">
          이 기기의 IP주소는 {ip}입니다.
      </header>
  );
}

function Users() {
  return (
      <div>
          <hr />
          <h2>사용자 페이지</h2>
          <div className='parent'>
              <div className='child'></div>
          </div>
          <div className='friend'></div>
      </div>
  );
}