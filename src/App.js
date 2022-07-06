
import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 500vh;
`
const ProgressBarCon = styled.div`
  position: fixed;
  right: 0;
  bottom:0;
  z-index: 100;
  width: 100vw;
  height: 5px;
  background: #34495e;
`
const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background: #e74c3c;

`

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

const Character = styled.div``

function App() {
  const [scrollY,setScrollY] = useState(0);
  let maxScrollValue;
  const houseElem = document.querySelector('#House');
  const barElem = document.querySelector('#progress-bar');
  const mousePos = {x:0 , y:0};
  const stageElem = document.querySelector('#stage');

  const logit = () => {
    setScrollY(window.pageYOffset);
    //1000 => 980 house 외벽 보여줌
    let zMove = (scrollY /maxScrollValue) ;
    //초기 -490vw 해줬던값을 빼줌 
    let finalMove = zMove *980- 490;
    houseElem.style.transform = 'translateZ('+ finalMove + 'vw)';

    //Progress Bar
    barElem.style.width = zMove *100 + '%';
  }

  const resizeHandler = () => {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
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

      //mouse 위치에 따른 시점변환
      window.addEventListener('mousemove',(e) => {
        mousePos.x = -1 +(e.clientX / window.innerWidth) *2;
        mousePos.y = 1 -(e.clientY/window.innerHeight) *2;
        console.log(mousePos)

        stageElem.style.transform = 'rotateX('+( mousePos.y*5)+'deg) rotateY('+ (mousePos.x*5 )+'deg)';
        
        //console.log(e.clientX,e.clientY)
      })

      window.addEventListener('resize',resizeHandler);

      resizeHandler()


  
  return (
    <Main>
      <ProgressBarCon>
        <ProgressBar id="progress-bar"></ProgressBar>
      </ProgressBarCon>

      {/* <SelectCharacter>
        <button class="select-character-btn select-character-btn-ilbuni" data-char="ilbuni"></button>
        <button class="select-character-btn select-character-btn-ragirl" data-char="ragirl"></button>
      </SelectCharacter>       */}

      <World>
        <Stage id="stage">
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

        {/* 케릭터 놓이는 부분 */}
        <Character id="character">
          <div className="character-face-con character-head">
            <div className="character-face character-head-face face-front"></div> 
            <div className="character-face character-head-face face-back"></div>  
          </div> 
          <div className="character-face-con character-torso">
            <div className="character-face character-torso-face face-front"></div> 
            <div className="character-face character-torso-face face-back"></div>  
          </div> 
          <div className="character-face-con character-arm character-arm-right">
            <div className="character-face character-arm-face face-front"></div> 
            <div className="character-face character-arm-face face-back"></div>  
          </div>
          <div className="character-face-con character-arm character-arm-left">
            <div className="character-face character-arm-face face-front"></div> 
            <div className="character-face character-arm-face face-back"></div>  
          </div>
          <div className="character-face-con character-leg character-lefg-right">
            <div className="character-face character-leg-face face-front"></div> 
            <div className="character-face character-leg-face face-back"></div>  
          </div>
          <div className="character-face-con character-leg character-lefg-left">
            <div className="character-face character-leg-face face-front"></div> 
            <div className="character-face character-leg-face face-back"></div>  
          </div>
        </Character>
        </Stage>
     </World>
    </Main>
  );
}

export default App;
