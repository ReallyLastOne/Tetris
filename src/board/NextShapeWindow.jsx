import { useState } from "react";
import styles from "./Tetrion.module.css";
const NextShapeWindow = () => {
  const [squares, setSquares] = useState(
    Array.from({ length: 2 }, () => Array(4).fill("gray"))
  );

  const Square = ({ color }) => {
    return (
      <div className={styles.cell} style={{ backgroundColor: color }}></div>
    );
  };

  return (
    <div style={{ margin: "10vh 0 0 5px", border: "1px solid black" }}>
      <p style={{ fontSize: "20px", fontFamily: "georgia" }}>NEXT</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {squares.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <Square key={`${rowIndex}-${colIndex}`} color={color} />
          ))
        )}
      </div>
    </div>
  );
};

export default NextShapeWindow;
