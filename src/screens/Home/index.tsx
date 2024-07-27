import { Fragment } from "react/jsx-runtime";
import '../../App.css'
import Dot from "../../components/Dot";
import useApp from "./hooks/useHome";

function App() {
  const {handleDesfazer, handleRefazer, handleClickDiv, dots} = useApp();
  return (
    <Fragment >
      <div className="buttonContainer">
        <button onClick={handleDesfazer}>
          Desfazer
        </button>
        <button onClick={handleRefazer}>
          Refazer
        </button>
      </div>
    <div className="container" onClick={handleClickDiv}>
      {dots.map((dot) => <Dot x={dot.x} y={dot.y}/>)}
    </div>
    </Fragment>
  );
}

export default App;
