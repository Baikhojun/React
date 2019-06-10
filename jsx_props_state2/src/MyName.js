import React, { Component } from 'react';

class MyName extends Component {
  // 기본 값은 여기서 설정하는데
  // 1. 최신 자바 스크립트 문법
  static defaultProps = {
    name: 'alphago'
  };

  render() {
    return (
      <div>
        Hello My Name is <b>{this.props.name} </b>
      </div>
    );
  }
}
// 2. 과거 JavaScript 문법 이제 안사용한다.
MyName.defaultProps = {
  name: 'betago'
};
export default MyName;
