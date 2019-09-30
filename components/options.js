import React, { Component } from 'react';

class Options extends Component {

  handleOptionClick = (option) => {
    this.props.onClickOption(option);
  }

  render() {
    return (
      <div className="options">
        <img src="assets/images/rock.png" onClick={() => {
          this.handleOptionClick('r');
        }}/>
        <img src="assets/images/paper.png" onClick={() => {
          this.handleOptionClick('p');
        }}/>
        <img src="assets/images/scissors.png" onClick={() => {
          this.handleOptionClick('s');
        }}/>
      </div>
    )
  }
}

export default Options;
