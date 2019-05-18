import React from 'react';

function Results(props) {

  let { me, cpu } = props.points;

  return (
    <div className="results">
      <div>
        <span>{me}</span> - <span>{cpu}</span>
      </div>
    </div>
  )
}

export default Results;
