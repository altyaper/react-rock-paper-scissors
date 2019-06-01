import React from 'react';

function Timeline(props) {

  let { items } = props;
  return (
    <div className="timeline">
      { items.slice(0).reverse().map((value, index) => {
        return (
          <div className="row" key={index}>
            <img src={`assets/images/mini-${value.me}.png`}/>
            <div className="line"></div>
            <img src={`assets/images/mini-${value.cpu}.png`}/>
          </div>
        )
      })}
    </div>
  );
}

export default Timeline;
