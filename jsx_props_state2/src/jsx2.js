import React, { Component, Fragment } from 'react';

// css 파일 불러오기
import './App.css';
class App extends Component {
 
 
  render() {
     const style = {
       // 원래는 중간에 Dash가 들어가는데 
       // camelCase 라고 새로운 단어가 
       //시작되면 대문자로 시작하는것으로 바꿔야한다.
       // 또한 모든 값은 String 으로 넣어야한다.
       // 단위도 넣어야한다.
       backgroundColor: 'black',
       padding : '16px',
       color : 'white',
       // 자바스크립트 형식으로 가능하다
       fontSize : 5+15 +'px'
     };
    return (
      
      <Fragment>
          { /* CSS1 :style 역시  { }에  골호안에 감싸줘야한다.*/ }
      <div style={style}>
        안녕하세요!afafaf
      </div>
      { /* CSS2  Class를 사용할떄는 ClassName사용해야한다.
      Name을 삭제해도 작동은 하지만 저렇게 해야하는게 기본이다
      */}
    <div className="App">
        안녕하세요!afafaf
      </div>
      </Fragment>
    ); 
  }
}

export default App;
