import { useState } from "react";
import styles from "./Tetrion.module.css";
const Tetrion = () => {
  const [squares, setSquares] = useState(
    Array.from({ length: 20 }, () => Array(10).fill("gray"))
  );

  const Square = ({ color }) => {
    return (
      <div className={styles.cell} style={{ backgroundColor: color }}></div>
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.tetrion}>
        {squares.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <Square key={`${rowIndex}-${colIndex}`} color={color} />
          ))
        )}
      </div>
    </div>
  );
};
export default Tetrion;
