import { Fragment } from "react/jsx-runtime";
import '../../App.css'
import Dot from "../../components/Dot";
import useApp from "./hooks/useHome";
import { EHomeButtonAction } from "../../types";

function App() {
  const {handleDivClick, handleHomeButtonAction, dots} = useApp();

  return (
    <Fragment >
      <div className="buttonContainer">
      <button onClick={() => handleHomeButtonAction(EHomeButtonAction.UNDO)}>
        Desfazer
      </button>
      <button onClick={() => handleHomeButtonAction(EHomeButtonAction.REMAKE)}>
        Refazer
      </button>
    </div>
    
    <div className="container" onClick={handleDivClick}>
      {dots.map((dot) => <Dot x={dot.x} y={dot.y}/>)}
    </div>
    </Fragment>
  );
}

export default App;
