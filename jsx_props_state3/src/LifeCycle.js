import React , { Component } from 'react'

/* 
  LifeCycle 생명주기
  1. 컴포넌트가 나타날떄 ( Mounting )
  2. 업데이트 될때
  3. 사라질 때 사용하기 ( UnMounting )
*/

/* 
 종류가 무척많아서 한개한개씩 봐보면 된다. 

 Mounting 
- Constructor : 생성자 함수 우리가 만든 컴포넌트가
처음 브라우저에서 나타날때 먼저 실행된다.
컴포넌트가 가지고있는 State 같은게 초기설정.

- getDerivedStateFromProps : Prop로 받은 값을
State에 넣어서 동결시키고 싶다면 쓴다.

- render : 어떤 Dom을 만들지 내부에 있는 Tag에는 
어떤 값을 전달할지

- componentDidMount : 실제 브라우저에 나타나면 실행됨
주로 외부 라이브러리를 사용할때 특정 Dom에 요청한다
Ajax등 을 실행할때 ,컴포넌트가 나타난 시점에 
무슨작업을 하겠다 를 명시.
특정 이벤트를 리스닝 스크롤 , 클릭 이벤트를 만든다

Updating
(중요)
- shouldComponentUpdate : 컴포넌트가 업데이트되는 성능을 
최적화시키고 싶을때 사용한다. Virtual Dom에 렌더링 할지 안할지
결정하는것이다. 최적화할때 사용가능 true, false 값을활용해

- getSnapshotBeforeUpdate : 우리가 렌더링 한후 브라우저에 반영
되기 직전 바로 호출 되는 함수이다. 업데이트 하기전에
스크롤 위치, 해당 Dom의 크기를 알고싶을때

- componetDidUpdate : 이 작업을 마치고 컴퍼넌트가 업데이 된후
예) state가 바꿨으면 이전 상태와 지금 상태가 바꼈다면 ~~작업을 하겠다.

Unmounting
- componetWillUnmount : 설정한 이벤트를 없에준다.
컴포넌트가 사라지면서 호출되는 함수
DidMount에서 싫애된 이벤트 or 리스너를 없에주는 작업한다. 


*/
class App extends Component{
  render(){
    return(
      <div>hello</div>
    );
  }
}

export default App;
