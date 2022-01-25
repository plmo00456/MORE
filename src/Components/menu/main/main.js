import styles from "./Main.scss";

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
        <div className="items">
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
          <div className="item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg" />
          </div>
        </div>
      </div>
      <div className="block drama"></div>
    </div>
  );
}
