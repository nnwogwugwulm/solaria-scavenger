import React, { Component } from 'react';
import './App.css';
import QuickStart from './story_components/quick_start';
import DemoRoom from './story_components/demo_room';
import Teleporter from './story_components/teleporter';
import TeleportFail from './story_components/teleport_fail';
import Blockchain from './story_components/blockchain';
import CryptoFail from './story_components/crypto_fail';
import PingPong from './story_components/ping_pong';
import AtlassianHell from './story_components/atlassian_hell';
import Winner from './story_components/winner';
import Lunches from './story_components/lunches';
import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_state: 'WELCOME',
      image: null
    };
  }
  render() {
    const handle_component_change = (new_state) => {
      this.setState({current_state: new_state});
    }

    const get_proper_component = (state_name) => {
      switch(state_name) {
        case 'WELCOME':
          return <QuickStart onMoveForward={handle_component_change} />;
        case 'DEMO_ROOM':
          return <DemoRoom onMoveForward={handle_component_change} />;
        case 'BLOCKCHAIN':
          return <Blockchain onMoveForward={handle_component_change} />;
        case 'CRYPTO_FAIL':
          return <CryptoFail onMoveForward={handle_component_change} />;
        case 'TELEPORTER':
          return <Teleporter onMoveForward={handle_component_change} />;
        case 'TELEPORT_FAIL':
          return <TeleportFail onMoveForward={handle_component_change} />;
        case 'PING_PONG':
          return <PingPong onMoveForward={handle_component_change} />;
        case 'LUNCHES':
          return <Lunches onMoveForward={handle_component_change} />;
        case 'ATLASSIAN_HELL':
          return <AtlassianHell onMoveForward={handle_component_change} />;
        case 'WINNER':
          return <Winner onMoveForward={handle_component_change} />;
        default:
          return <Header />;
      }
    }

    return (
      <div className="App">
        <Header />
        <div className="App">
          {get_proper_component(this.state.current_state)}
        </div>
      </div>
    );
  }
}

export default App;
