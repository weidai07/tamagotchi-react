import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiControl';
import NewTamagotchiControl from './NewTamagotchiControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTamagotchiElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTamagotchiElapsedWaitTime() {
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach((tamagotchi) =>
      tamagotchi.formattedWaitTime = (tamagotchi.timeOpen).fromNow(true)
    );
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }

  handleAddingNewTamagotchiToList(newTamagotchi){
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchi.formattedWaitTime = (newTamagotchi.timeOpen).fromNow(true);
    newMasterTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiControl onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
