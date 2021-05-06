import { useEffect, useState } from "react";

export function BoardCell({ identifier, play, cords }) {
  const [cellState, setCellState] = useState(0);

  useEffect(() => {
    setCellState(identifier);
  }, []);
  function getCellColor(num) {
    if (num === 2) return "blue";
    else if (num === 1) return "red";
    return "";
  }
  return (
    <div className="cell-container" onClick={() => play(cords)}>
      <div
        className="token"
        style={{ backgroundColor: getCellColor(cellState) }}
      ></div>
    </div>
  );
}
