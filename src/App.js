
import styled from "styled-components";

const Main = styled.div`
  background-color: "tomato";
`
const ProgressBarCon = styled.div``
const ProgressBar = styled.div``

const SelectCharacter = styled.div``

const World = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  perspective: 1000px;
  width: 100vw;
  height: 100vh;
`

const Stage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  //3d 기능 전달
  transform-style: preserve-3d;  

`
const House = styled.div`
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;  
`
const Wall = styled.div`
//모두 포게기
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(255,255,255,0.8);
  
`


function App() {
  return (
    <Main>
      {/* <ProgressBarCon>
        <ProgressBar></ProgressBar>
      </ProgressBarCon>

      <SelectCharacter>
        <button class="select-character-btn select-character-btn-ilbuni" data-char="ilbuni"></button>
        <button class="select-character-btn select-character-btn-ragirl" data-char="ragirl"></button>
      </SelectCharacter>       */}

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
