
import styled from "styled-components";

const Main = styled.div``
const ProgressBarCon = styled.div``
const ProgressBar = styled.div``

const SelectCharacter = styled.div``

const World = styled.div``

const Stage = styled.div``
const House = styled.div``
const Wall = styled.div``


function App() {
  return (
    <Main>
      <ProgressBarCon>
        <ProgressBar></ProgressBar>
      </ProgressBarCon>

      <SelectCharacter>
        <button class="select-character-btn select-character-btn-ilbuni" data-char="ilbuni"></button>
        <button class="select-character-btn select-character-btn-ragirl" data-char="ragirl"></button>
      </SelectCharacter>      

      <World>
        <Stage>
          <House>
            <Wall className="wall-left"></Wall>
            <Wall className="wall-right"></Wall>
            <Wall className="wall-front wall-front-a">
              <div className="wall-content">
                <h2 className="wall-title">안녕하세요</h2>
              </div>
            </Wall>
            <Wall className="wall-front wall-front-b">
              <div className="wall-content">
                <h2 className="wall-title">Hello</h2>
              </div>
            </Wall>
            <Wall className="wall-front wall-front-c">
              <div className="wall-content">
                <h2 className="wall-title">Hola</h2>
              </div>
            </Wall>
            <Wall className="wall-front wall-front-d">
              <div className="wall-content">
                <h2 className="wall-title">你好</h2>
              </div>
            </Wall>
          </House>
        </Stage>
     </World>
    </Main>
  );
}

export default App;
