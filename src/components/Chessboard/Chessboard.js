import React, { useState } from "react";
import "./chessboard.css";

import { logic } from "./logic.js";

const Chessboard = () => {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  const handleClear = () => {
    setBoard((board) => {
      let newBoard = board.map((row, index) => {
        return row.map((cell, ind) => {
          let result = "";
          return result;
        });
      });

      return newBoard;
    });
  };

  const handleClick = (x, y) => {
    console.log(x, y);
    setBoard((board) => {
      let possibleMoves = JSON.stringify(logic(x, y));

      let newBoard = board.map((row, index) => {
        return row.map((cell, ind) => {
          let str = `[${index},${ind}]`;
          let result = "";
          if (index === x && ind === y) result = "♞";
          else if (possibleMoves.indexOf(str) !== -1) result = "◉";
          return result;
        });
      });

      return newBoard;
    });
  };

  return (
    <div className="chessboardContainer">
      <span>Get aside, Knight's coming. Neigh! Neigh! Neigh!</span>
      <table className="chess-board">
        <tbody>
          {board.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, ind) => {
                  if (index == 0 && ind == 0) return <th key={ind}></th>;
                  if (index == 0 && ind != 0) return <th key={ind}>{ind}</th>;

                  let x = String.fromCharCode(65 + index - 1);
                  let y = ind;
                  if (index != 0 && ind == 0)
                    return (
                      <th key={ind}>{String.fromCharCode(65 + index - 1)}</th>
                    );
                  else if (
                    (ind % 2 != 0 && index % 2 != 0) ||
                    (ind % 2 == 0 && index % 2 == 0)
                  )
                    return (
                      <td
                        key={ind}
                        className={`light ${x}${y}`}
                        onClick={() => handleClick(x.charCodeAt(0) - 64, y)}
                      >
                        {cell}
                      </td>
                    );
                  else if (
                    (ind % 2 == 0 && index % 2 != 0) ||
                    (ind % 2 != 0 && index % 2 == 0)
                  )
                    return (
                      <td
                        key={ind}
                        className={`dark ${x}${y}`}
                        onClick={() => handleClick(x.charCodeAt(0) - 64, y)}
                      >
                        {cell}
                      </td>
                    );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn" onClick={handleClear}>
        Reset
      </button>
    </div>
  );
};

export default Chessboard;
