import React, { useState } from "react";
import { PanelCnt } from "./AddTextPanelStyles";
import Draggable from "react-draggable";

export default function AddTextPanel({
  addTextArea,
  tabOfTextareas,
  currentTime
}) {
  const [nextId, setNextId] = useState(0);

  const setPosition = (e, id) => {
    console.log(e);
    const tmpTableOfTextareas = tabOfTextareas.map(el => {
      if (el.id === id) {
        return { ...el, x: e.layerX, y: e.layerY };
      } else return el;
    });
    addTextArea(tmpTableOfTextareas);
  };

  const changeValueOfTextArea = (value, id) => {
    const tmpTableOfTextareas = [...tabOfTextareas];

    tmpTableOfTextareas.forEach(el => {
      if (el.id === id) {
        el.value = value;
      }
    });
    addTextArea(tmpTableOfTextareas);
  };
  return (
    <PanelCnt>
      <button
        onClick={() => {
          addTextArea([
            ...tabOfTextareas,
            { id: nextId, value: "Add Text", start: 0, end: 10, x: 0, y: 0 }
          ]);
          setNextId(nextId + 1);
        }}
      >
        Add Text Area
      </button>
      {tabOfTextareas.map(
        textarea =>
          currentTime >= textarea.start &&
          currentTime <= textarea.end && (
            <Draggable
              defaultPosition={{ x: textarea.x, y: textarea.y }}
              position={null}
              onStop={e => setPosition(e, textarea.id)}
              scale={1}
            >
              <textarea
                value={textarea.value}
                onChange={e =>
                  changeValueOfTextArea(e.target.value, textarea.id)
                }
              ></textarea>
            </Draggable>
          )
      )}
    </PanelCnt>
  );
}
