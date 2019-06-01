import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';

// Components
import Title from './title';
import Options from './options';
import Results from './results';
import Timeline from './timeline';
import InfoMatch from './infomatch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: {
        me: 0,
        cpu: 0
      },
      matchInfo: '',
      timeline: []
    }
  }

  getOptionNameByLetter(letter) {
    const options = {
      r: 'Rock',
      p: 'Paper',
      s: 'Scissors'
    }
    return options[letter];
  }

  handleWin = (userOptionWord, cpuOptionWord) => {
    const matchInfo = `${userOptionWord} beats ${cpuOptionWord}. You win. 🔥`;
    let { points } = this.state;
    points.me = points.me + 1;
    this.setState({points, matchInfo});
  }

  handleLose = (userOptionWord, cpuOptionWord) => {
    const matchInfo = `${userOptionWord} loses to ${cpuOptionWord}. You lost. 💩`;
    let { points } = this.state;
    points.cpu = points.cpu + 1;
    this.setState({matchInfo, points});
  }

  handleDraw = (userOptionWord, cpuOptionWord) => {
    const matchInfo = `${userOptionWord} equals ${cpuOptionWord}. It's a draw. 😶`;
    this.setState({matchInfo});
  }

  handleClickOption = (userOption) => {
    let { timeline } = this.state;
    let cpuOption = this.generateRandomOption();
    let match = userOption + cpuOption;
    const userOptionWord = this.getOptionNameByLetter(userOption);
    const cpuOptionWord = this.getOptionNameByLetter(cpuOption);

    switch (match) {
      case 'rs':
      case 'pr':
      case 'sp':
        this.handleWin(userOptionWord, cpuOptionWord);
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        this.handleLose(userOptionWord, cpuOptionWord);
        break;
      default:
        this.handleDraw(userOptionWord, cpuOptionWord);
    }

    let newItem = {me: userOption, cpu: cpuOption};
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

    let { points, timeline, matchInfo } = this.state;

    return (
      <div className="app">
        <Title />
        <Options onClickOption={this.handleClickOption}/>
        <InfoMatch match={matchInfo}/>
        <Results points={points}/>
        <Timeline items={timeline}/>
      </div>
    )
  }

}

let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
