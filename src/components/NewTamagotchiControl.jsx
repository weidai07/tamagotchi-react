import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTamagotchiForm from './NewTamagotchiForm';
import PropTypes from 'prop-types';

class NewTamagotchiControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTamagotchiForm onNewTamagotchiCreation={this.props.onNewTamagotchiCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTamagotchiControl.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchiControl;
