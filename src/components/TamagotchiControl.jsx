import React from 'react';
import Tamagotchi from './Tamagotchi';
// import PropTypes from 'prop-types';

function TamagotchiControl(props){
  return (
    <div>
        <Tamagotchi name={props.name}
          hunger={props.hunger}
          play={props.play}
          rest={props.rest}
          status={props.status}
          // formattedWaitTime={props.formattedWaitTime}
          // key={props.id}
          />
    </div>
  );
}

// TamagotchiControl.propTypes = {
//   tamagotchiControl: PropTypes.array
// };

export default TamagotchiControl;