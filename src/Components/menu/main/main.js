import "./Main.scss";
import React, { useRef, useState, useEffect } from "react";
import customAxios from "../../lib/customAxios";
import Items from "./Components/Item";

const LiteItems = (props) => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [mode, setMode] = useState(
    props.mode.charAt(0).toUpperCase() + props.mode.slice(1)
  );
  const tabName =
    props.mode === "movie"
      ? ["상영중", "인기순", "평점순"]
      : ["탭1", "탭2", "탬3"];
  const [url, setUrl] = useState();
  const [list, setList] = useState([]);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const callback = async (data) => {
    //if (props.mode === "drama") data.results[0].title = data.results[0].name;
    setList(data.results);
  };

  useEffect(() => {
    const _url = props.mode === "movie" ? "movie/now_playing" : "tv/popular";

    customAxios(
      "https://api.themoviedb.org/3/" +
        _url +
        "?api_key=4ea732f941fa35d84fc5003bcae9dfd8&language=ko-KR&page=1",
      callback
    );
  }, [customAxios]);

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 1;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div className="block {props.mode}">
      <div className="title">
        <span>{mode}</span>
        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" defaultChecked />
          <label className="tab" htmlFor="radio-1" data-tab="1">
            {tabName[0]}
          </label>
          <input type="radio" id="radio-2" name="tabs" data-tab="2" />
          <label className="tab" htmlFor="radio-2">
            {tabName[1]}
          </label>
          <input type="radio" id="radio-3" name="tabs" data-tab="3" />
          <label className="tab" htmlFor="radio-3">
            {tabName[2]}
          </label>
          <span className="glider"></span>
        </div>
      </div>
      <Items
        itemInfo={list}
        onDragStart={onDragStart}
        onThrottleDragMove={onThrottleDragMove}
        onDragEnd={onDragEnd}
        scrollRef={scrollRef}
      />
    </div>
  );
};

export default function Main() {
  return (
    <div className="block-wrap">
      <LiteItems mode="movie" />
      <LiteItems mode="drama" />
    </div>
  );
}
