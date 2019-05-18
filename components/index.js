import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Hola mundo desde React</h1>
        <img src="/assets/images/react-logo.png"/>
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
