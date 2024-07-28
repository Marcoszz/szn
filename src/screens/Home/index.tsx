import '../../App.css';
import Dot from "../../components/Dot";
import { EHomeButtonAction } from "./types";
import useApp from "./hooks/useHome";
import { ButtonContainer, OutsideContainer } from './styles';

const Home = () => {
  const {handleDivClick, handleHomeButtonAction, dots} = useApp();

  return (
    <>
      <ButtonContainer>
        <button
        className="bg-red-600" 
        onClick={() => handleHomeButtonAction(EHomeButtonAction.UNDO)}>
          {EHomeButtonAction.UNDO}
        </button>
        <button
        className="bg-green-600" 
        onClick={() => handleHomeButtonAction(EHomeButtonAction.REMAKE)}>
          {EHomeButtonAction.REMAKE}
        </button>
      </ButtonContainer>
        

      <OutsideContainer onClick={handleDivClick}>
        {dots.map((dot, i) => <Dot key={i} x={dot.x} y={dot.y}/>)}
      </OutsideContainer>
    </>
  );
}

export default Home;
