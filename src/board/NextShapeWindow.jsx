import { useEffect, useState } from "react";
import styles from "./Tetrion.module.css";
const NextShapeWindow = () => {
  const [squares, setSquares] = useState(
    Array.from({ length: 2 }, () => Array(4).fill("gray"))
  );

  useEffect(() => {
    generateNextShape();
  }, []);

  const generateNextShape = () => {
    console.log("generateNextShape");
    var random = Math.floor(Math.random() * 7);
    console.log(random);
    switch (random) {
      case 0:
        setSquares([
          ["gray", "#EFFD5F", "#EFFD5F", "gray"],
          ["gray", "#EFFD5F", "#EFFD5F", "gray"],
        ]);
        break;
      case 1:
        setSquares([
          ["#ADD8E6", "#ADD8E6", "#ADD8E6", "#ADD8E6"],
          ["gray", "gray", "gray", "gray"],
        ]);
        break;
      case 2:
        setSquares([
          ["gray", "#c61a09", "#c61a09", "gray"],
          ["#c61a09", "#c61a09", "gray", "gray"],
        ]);
        break;
      case 3:
        setSquares([
          ["gray", "#90EE90", "#90EE90", "gray"],
          ["gray", "gray", "#90EE90", "#90EE90"],
        ]);
        break;
      case 4:
        setSquares([
          ["gray", "gray", "#FFD580", "gray"],
          ["#FFD580", "#FFD580", "#FFD580", "gray"],
        ]);
        break;
      case 5:
        setSquares([
          ["gray", "#FFB6C1", "gray", "gray"],
          ["gray", "#FFB6C1", "#FFB6C1", "#FFB6C1"],
        ]);
        break;
      case 6:
        setSquares([
          ["gray", "#CBC3E3", "#CBC3E3", "#CBC3E3"],
          ["gray", "gray", "#CBC3E3", "gray"],
        ]);

        break;
    }
  };

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
