import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';

// Components
import Title from './title';
import Options from './options';
import Results from './results';
import Timeline from './timeline';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: {
        me: 0,
        cpu: 0
      },
      timeline: []
    }
  }

  handleWin = () => {
    let { points } = this.state;
    points.me = points.me + 1;
    this.setState({
      points
    })
  }

  handleLose = () => {
    let { points } = this.state;
    points.cpu = points.cpu + 1;
  }

  handleDraw = () => {
  }

  handleClickOption = (meOption) => {
    let { timeline } = this.state;
    let cpuOption = this.generateRandomOption();
    let fight = meOption+cpuOption;

    switch (fight) {
      case 'rs':
      case 'pr':
      case 'sp':
        this.handleWin()
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        this.handleLose();
        break;
      default:
        this.handleDraw();
    }

    let newItem = {me: meOption, cpu: cpuOption};
    timeline.push(newItem);
    this.setState({
      timeline
    });

  }

  generateRandomOption() {
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    return ['r', 'p', 's'][randomNumber];
  }

  render() {

    let { points, timeline } = this.state;

    return (
      <div className="app">
        <Title />
        <Options onClickOption={this.handleClickOption}/>
        <Results points={points}/>
        <Timeline items={timeline}/>
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
