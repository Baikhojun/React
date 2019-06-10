import React, { Component, Fragment } from 'react';
// 'react' 모듈을 불러와서 사용하겠다. 사용할려면
// 저렇게 React를 import해야한다.

// Component를 만드는 방법은 Class로 만들기
// 함수로 만드는 방법이 있다.
//Class 문법을 사용했다.
class App extends Component { 

  // render() 라는 함수가 있는데 메소드라고 보면된다.
  render() {
      const name = 'hoji';
      let name2 = 'alphago';
      // let 과 const과 블록 단위로 되어있어서 지정한곳에서만 된다
      // Var vs Const vs Let 
      // Var 이제 쓰지 않는다.
      // COnst 한번 선언후 고정적인 거
      // let 한번 선언후 바뀔수 있는 것 

      const value = 3 ;

        // 꼭 JSX 형식으로 Return 해줘야한다. 
    return (
        // Div 두개 이상일때는 fragment를 사용한다.
        // return 할때 한가지 element만 하는데
        // component return 한개만해야한다.
      <Fragment>
        {/* { } 를 통해 값을 넣는다*/}
        <div>
          <input type="text" value="hi" />
          <h1>안녕하세요 {name}</h1>
        </div>
        <div>
          <h2>hello {name2} 입니다.</h2>
        </div>
        <div>
        {/*조건 부 렌더링  */}
        {/* ==과 ===의 차이는 ? 세개짜리는 타입까지 비교하고 값을 비교한다 */}
        {/* ternarn operation if문사용힘들어서 사용*/}
        {/*삼항 연산자 or And연산자 사용가능 */}
        {
        (name === 'hoji') && <h4>{name} 이다.</h4>
        }
        </div>

        <div>
          
        { /*  다중 if문 할려면 이렇게도 가능
        함수를 선언한뒤 바로 호출 해준다 
          함수를 () 로 우선 감싸주고 
          호출할때는 뒤에 () 를 붙인다. */}
        {
          (function(){
            if( value ===1) return <h5>1이다!</h5>
            if( value ===2) return <h5>2이다!</h5>
            if( value ===3) return <h5>3이다!</h5>
            if( value ===4) return <h5>4이다!</h5>
            return <h5>없다</h5>
          }) ()

        }

          
        { /* 좀더 간편하게 할려면 화살표 함수를 
        사용할수 있다. 이것은 this , arguments, 
          super개념이없다  */}
      {   ( () => {
            if( value ===1) return <h5>1이다!</h5>
            if( value ===2) return <h5>2이다!</h5>
            if( value ===3) return <h5>3이다!</h5>
            if( value ===4) return <h5>4이다!</h5>
            return <h5>없다</h5>
          }) ()
        }
        </div>

      </Fragment>
      
    );
  }
}

export default App;
    