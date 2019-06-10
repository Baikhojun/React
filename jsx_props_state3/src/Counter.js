import React, { Component } from 'react';

class Counter extends Component {
  // State를 정의하자 우선
  // 문저열 숫자열 안되고 무조건 객체해야한다.
  state = {
    number: 0
  };

  // 숫자를 변경시킬려면 CustmerMethod 만들어야한다

  handleIncrease = () => {
    // this.state.number += 1;
    //이런식으로 하면 안된다. 왜냐면 Component의 값이
    //변경됐는지 컴포너트 자체가 모르기 때문이다.

    // 여기선 이렇게 사용한다.
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  // render랑 달리 Increase 랑 Decrease 화살표로 만든이유는?
  // 일반으로 하면 this가 무엇인지 모르게 된다.
  // 화살표를 안사용할려면 constructor(props) 를 만들어야한다.

  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  // 이렇게 만들어도 된다.
  /*
  이벤트 설정 = 버튼
다 같지만 기존 html과는 다르게 camelcase로 onclick이 아니라 onClick
버튼안에 함수를 넣어야지 함수호출식으로 넣으면 렌더링할때마다 호출 (조심)
this.method를 넣어야지 this.method()를 넣으면 안됩니다*/
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 :{this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
export default Counter;

// state 는 컴포넌트 내부에 있구
// 컴포넌트의 내부에서 바뀔수 있는 값이다.
// 바뀔 때마다 값이 리 랜딩 된다.
// 바꿀려면 Setstate 해야하는데.
// 안하면 인식 불가

// props는 부모가 자식에게 넘겨주는것이고 읽기전용
// state는 자신이 들고 있고 변경할수 있다.

