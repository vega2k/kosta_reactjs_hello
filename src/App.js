import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import { MyComponentFunc } from './components/MyComponentFunc';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MyComponent name="리액트" age={100} />
        <MyComponentFunc name="함수형컴포넌트">
          <div>하위 컴포넌트</div>
        </MyComponentFunc>
      </React.Fragment>
    );
  }
}

export default App;