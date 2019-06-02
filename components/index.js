import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getOptionNameByLetter, generateRandomOption } from '../lib/helper_functions';
import getCpuOptionFromApi from '../api/rps';
import CSS from '../assets/css/styles.scss';

// Components
import Title from './title';
import Options from './options';
import Results from './results';
import Timeline from './timeline';
import InfoMatch from './infomatch';
import Confetti from './confetti';
import MatchAnimation from './matchAnimation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: {
        me: 0,
        cpu: 0
      },
      matchInfo: '',
      timeline: [],
      showConfetti: false,
      showMatchAnimation: false,
      matches: []
    }
  }

  handleWin = (userOptionWord, cpuOptionWord) => {
    const matchInfo = `${userOptionWord} beats ${cpuOptionWord}. You win. 🔥`;
    let { points } = this.state;
    points.me = points.me + 1;
    this.setState({points, matchInfo});
    this.confettiTimer();
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

  confettiTimer = () => {
    this.setState({
      showConfetti: true
    });
    setTimeout(() => {
      this.setState({
        showConfetti: false
      })
    }, 1000)
  }

  handleClickOption = (userOption) => {
    const { matches } = this.state;
    matches.push(userOption);
    this.setState({
      showMatchAnimation: true,
      matches
    });
    setTimeout(() => {
      this.play(userOption);
    }, 3000);
  }

  play = async (userOption) => {
    let { timeline, matches } = this.state;
    let cpuOptionRequest = await getCpuOptionFromApi(matches);
    let cpuOption = (cpuOptionRequest.data.nextBestMove).toLowerCase();
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
    this.setState({timeline, showMatchAnimation: false});
  }


  render() {
    let { points, timeline, matchInfo, showConfetti, showMatchAnimation } = this.state;
    return (
      <div className="app">
        <Title />
        <Results points={points}/>
        {showMatchAnimation && <MatchAnimation match={matchInfo}/>}
        {showConfetti && <Confetti />}
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
