import React, { Component, Fragment } from 'react';

// Props 와 State 개념 알아보기
// React에서 데이터 사용할때 스는 개념이다
// Props 는 부모 Componet가 자식 Componet에 값을 전달할때 사용


// Counter 가져오기
import Counter from './Counter';
class App extends Component {
  render() {
    return (
      <>
       <Counter/>
      </>
    );
  }
}

export default App;
