//import React , { Component } from 'react';
// 함수형 Component를 만들면 더이상 상단에서 코드형 컴포넌트를 
// 불러 올 필요가 없다.
import React from 'react';
// React를 그래도 불러오는 이유는 내부적으로
// JSX 가 실행될때 필요함으로 불러온다.

// 비구조 할당 문법 
// 
const FunctionComponent = ({ name }) => {
  return (
    <div>
      Hello My FunctioN {name} 
    </div>
  );
}

FunctionComponent.defaultProps = {
  name : 'thetago'
};




export default FunctionComponent;