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
