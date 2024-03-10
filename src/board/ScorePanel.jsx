import { useState } from "react";
const ScorePanel = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [linesBroken, setLinesBroken] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const Section = ({ text, value }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "5px",
          margin: "5px",
          textAlign: "left",
        }}
      >
        {text}: {value}
      </div>
    );
  };

  return (
    <div>
      <Section text="Level" value={level} />
      <Section text="Score" value={score} />
      <Section text="Lines broken" value={linesBroken} />
      <Section text="Highscore" value={highscore} />
    </div>
  );
};
export default ScorePanel;
