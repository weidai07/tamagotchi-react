import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return (
    <div>
      <h3>{props.name} {props.hunger}</h3>
      <h4>{props.play} {props.rest}</h4>
      <p><em>{props.status}</em></p>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  hunger: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
  // formattedWaitTime: PropTypes.string.isRequired,
};

export default Tamagotchi;
