
import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 500vh;
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
  // house를 줌아웃시킴 
  transform: translateZ(-490vw);
`
// const Wall = styled.div`
// //모두 포게기
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(255,255,255,0.8);
// `

// const WallLeft = styled.div`
//   left: -500vw;
// 	width: 1000vw;
// 	transform: rotateY(90deg);
// `

const WallContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

const WallTitle = styled.h2`
  font-size: 5rem;
`


function App() {
  const [scrollY,setScrollY] = useState(0);
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  const houseElem = document.querySelector('#House');

  const logit = () => {
    setScrollY(window.pageYOffset);
    let zMove = (scrollY /maxScrollValue) *1000;
    let finalMove = zMove - 490;
    houseElem.style.transform = 'translateZ('+ finalMove + 'vw)';
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };

      });
  
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
          <House id="House">
            <div className="wall wall-left"></div>
            <div className="wall wall-right"></div>
            <div className="wall wall-front wall-front-a">
              <WallContent>
                <WallTitle>안녕하세요</WallTitle>
              </WallContent>
            </div>
            <div className="wall wall-front wall-front-b">
              <WallContent>
                <WallTitle>Hello</WallTitle>
              </WallContent>
            </div>
            <div className="wall wall-front wall-front-c">
              <WallContent>
                <WallTitle>Hola</WallTitle>
              </WallContent>
            </div>
            <div className="wall wall-front wall-front-d">
              <WallContent>
                <WallTitle>你好</WallTitle>
              </WallContent>
            </div>
          </House>
        </Stage>
     </World>
    </Main>
  );
}

export default App;
