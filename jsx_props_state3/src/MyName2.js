//import React , { Component } from 'react';
// 함수형 Component를 만들면 더이상 상단에서 코드형 컴포넌트를 
// 불러 올 필요가 없다. 

import React from 'react';
// React를 그래도 불러오는 이유는 내부적으로
// JSX 가 실행될때 필요함으로 불러온다.

// 비구조 할당 문법 
// ({name})은 결국 하나의 객체형태의 Parameter인데
// 객체 의 내부에 있는 Name을 Props롤 받아와서 사용하는것이다.
const MyName2 = ({ name }) => {
  return (
    <div> 
      Hello My FunctioN <b>{name}</b>
    </div>
  );
}

MyName2.defaultProps = {
  name : 'thetago'
};

// ***함수형이랑 Class형 차이점***
// State 및 Lifecycle 기능이 있고없구
// ***함수형은 언제 쓸까?
// 1. 초기 마운트 속도가  미세하게 빠르다.
// 2. 불필요한 작업이 없어서 메모리 자원 덜 사용.
// 3. 어떤 값을 가져와 단순 보여주는것일 떄 사용한다
// 사실상 성능적으로 큰차이는 없지만...
// Componet를 간단하게 만들수 있고




export default MyName2;