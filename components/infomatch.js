import React, { Component } from 'react';

const InfoMatch = (props) => {
  const { match } = props;
  return (
    <div className="info-match">
      <h2>{match}</h2>
    </div>
  )
}


export default InfoMatch;
