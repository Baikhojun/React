import React, { Component, Fragment } from 'react';

// Props 와 State 개념 알아보기
// React에서 데이터 사용할때 스는 개념이다
// Props 는 부모 Componet가 자식 Componet에 값을 전달할때 사용

// MyName.js 에서의 값을 보여줄려면
import MyName from './MyName';
class App extends Component {
  render() {
    return (
      <>
        {/* 위에 했던 MyName을 렌더링 해줘야한다.  */}
        <MyName name="hoji" />
        {/* props 가 안들어가질때 기본 props를 설정할수있다.*/}
        <MyName />
      </>
    );
  }
}

export default App;
