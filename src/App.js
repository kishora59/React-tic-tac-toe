import "./styles.css";
import { useState } from "react";
function Square() {
  const [value, setValue] = useState(null);
  function handclick() {
    setValue("X");
  }
  return (
    <button classname="square" onClick={handclick}>
      {value}
    </button>
  );
}
export default function Board() {
  return (
    <>
      <div classname="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div classname="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div classname="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
