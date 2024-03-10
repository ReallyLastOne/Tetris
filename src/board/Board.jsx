import Tetrion from "./Tetrion";
import SidePanel from "./SidePanel";
const Board = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tetrion></Tetrion>
      <SidePanel></SidePanel>
    </div>
  );
};

export default Board;
