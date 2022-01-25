import styles from "./Main.scss";

export default function Main() {
  return (
    <div className="block-wrap">
      <div className="block movie">
        <div className="title">
          <span>영화</span>
          <div className="tabs">
            <input type="radio" id="radio-1" name="tabs" defaultChecked />
            <label className="tab" htmlFor="radio-1">
              Upcoming
            </label>
            <input type="radio" id="radio-2" name="tabs" />
            <label className="tab" htmlFor="radio-2">
              Development
            </label>
            <input type="radio" id="radio-3" name="tabs" />
            <label className="tab" htmlFor="radio-3">
              Completed
            </label>
            <span className="glider"></span>
          </div>
        </div>
        <div className="list"></div>
      </div>
      <div className="block drama"></div>
    </div>
  );
}
