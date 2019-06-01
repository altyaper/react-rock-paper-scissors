import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getOptionNameByLetter, generateRandomOption } from '../lib/helper_functions';
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
    let cpuOption = generateRandomOption();
    let match = userOption + cpuOption;

    const userOptionWord = getOptionNameByLetter(userOption);
    const cpuOptionWord = getOptionNameByLetter(cpuOption);

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
    this.setState({timeline});
  }


  render() {

    let { points, timeline, matchInfo } = this.state;

    return (
      <div className="app">
        <Title />
        <Results points={points}/>
        <Options onClickOption={this.handleClickOption}/>
        <InfoMatch match={matchInfo}/>
        <Timeline items={timeline}/>
      </div>
    )
  }

}

let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
