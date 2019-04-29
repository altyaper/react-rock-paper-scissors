import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Root extends Component {
  render() {
    return (
      <h1>Hola mundo desde React</h1>
    )
  }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);
