import styles from "./Main.scss";
import React, { useRef, useState, useEffect } from "react";

const LiteItems = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    console.log(2);
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    console.log(1);
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
};

export default function Main() {
  return (
    <div className="block-wrap">
      <div className="block movie">
        <div className="title">
          <span>Movie</span>
          <div className="tabs">
            <input type="radio" id="radio-1" name="tabs" defaultChecked />
            <label className="tab" htmlFor="radio-1">
              Tab1
            </label>
            <input type="radio" id="radio-2" name="tabs" />
            <label className="tab" htmlFor="radio-2">
              Tab2
            </label>
            <input type="radio" id="radio-3" name="tabs" />
            <label className="tab" htmlFor="radio-3">
              Tab3
            </label>
            <span className="glider"></span>
          </div>
        </div>
        <div
          className="items"
          onMouseDown={LiteItems.onDragStart}
          onMouseMove={LiteItems.onThrottleDragMove}
          onMouseUp={LiteItems.onDragEnd}
          onMouseLeave={LiteItems.onDragEnd}
          ref={LiteItems.scrollRef}
        >
          <div className="item">
            <div className="wrap">
              <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
            </div>
            <div className="info">
              <div className="title">
                <span className="main-title">몬스터 호텔 4</span>
                <span className="sub-title">Hotel Transylvania 4 2021</span>
              </div>
              <div className="outline">애니메이션 | 미국</div>
              <div className="summary">
                드락이 트랜실베니아 호텔을 딸 마비스와 사위 조니에게 넘길려고
                한다. 그런데 조니의 형편없는 호텔 계획을 들은 드락은 걱정을
                한다. 드라은 인간인 조니에게 오직 몬스터만 호텔 사업을 이끌어 갈
                수 있다고 장난을 친다. 그러자 조니는 몬스터가 되기로 결심하고,
                반헬싱의 신비한 발명품인 '몬스터피케이션 레이'가 엉망이 되면서
                조이는 몬스터가 됐지만, 드락과 그의 친구들은 인간으로 변하게
                된다. 과연, 드락과 조니는 그들이 저지른 실수들을 바로 잡을 수
                있을까?
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
        </div>
      </div>
      <div className="block drama"></div>
    </div>
  );
}
