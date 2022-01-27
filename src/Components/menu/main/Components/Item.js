import React from "react";

const Items = ({
  itemInfo,
  onDragStart,
  onThrottleDragMove,
  onDragEnd,
  scrollRef,
  mode,
}) => {
  return (
    <div
      className="items"
      mode={mode}
      onMouseDown={onDragStart}
      onMouseMove={onThrottleDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {itemInfo.map((item, index) => {
        let scoreEval;
        if (item.vote_average > 7.5) {
          scoreEval = "good";
        } else if (item.vote_average > 5.5) {
          scoreEval = "normal";
        } else {
          scoreEval = "bad";
        }
        return (
          <div className="item" key={index}>
            <div className="wrap">
              <img
                src={
                  "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                  item.poster_path
                }
                alt={mode === "movie" ? item.title : item.name}
              />
              <div className={"score " + scoreEval}>{item.vote_average}</div>
            </div>
            <div className="info">
              <div className="title">
                <span className="main-title">
                  {mode === "movie" ? item.title : item.name}
                </span>
                <span className="sub-title">{item.original_title}</span>
              </div>
              <div className="outline"></div>
              <div className="summary">{item.overview}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
