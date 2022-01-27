import React from "react";

const Tr = ({
  itemInfo,
  onDragStart,
  onThrottleDragMove,
  onDragEnd,
  scrollRef,
}) => {
  return (
    <div
      className="items"
      onMouseDown={onDragStart}
      onMouseMove={onThrottleDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {itemInfo.map((item) => {
        return (
          <div className="item">
            <div className="wrap">
              <img
                src={
                  "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                  item.poster_path
                }
                alt="영화 포스터"
              />
            </div>
            <div className="info">
              <div className="title">
                <span className="main-title">{item.title}</span>
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

export default Tr;
