import React from "react";
import { RangeCnt, PositionOfVideo } from "./TextAppearenceRangeStyles";
export default function TextAppearenceRange({
  currentTime,
  duration,
  changeDataOfTextArea,
  tabOfTextareas,
  id
}) {
  const changeStartEndValue = (value, isStart) => {
    const tmpTableOfTextareas = tabOfTextareas.map(el => {
      if (el.id === id) {
        if (isStart) return { ...el, start: parseInt(value) };
        else return { ...el, end: parseInt(value) };
      } else return el;
    });
    changeDataOfTextArea(tmpTableOfTextareas);
  };
  return (
    <>
      <RangeCnt
        type="range"
        min="0"
        max="10"
        value={tabOfTextareas[id].start}
        onChange={e => changeStartEndValue(e.target.value, true)}
      ></RangeCnt>
      <RangeCnt
        type="range"
        min="0"
        max="10"
        value={tabOfTextareas[id].end}
        onChange={e => changeStartEndValue(e.target.value, false)}
      ></RangeCnt>
      <PositionOfVideo
        currentTime={currentTime}
        duration={duration}
        length={id}
      />
    </>
  );
}
