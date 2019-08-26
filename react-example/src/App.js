import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    showHello: false,
  };

  handleClick = () => { this.setState({ showHello: !this.state.showHello });};

  render() {
    const { showHello } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h3>Stencil <em>counter-box</em></h3>
          <counter-box max="30" start="20" min="10" />

          <h3>Stencil <em>action-button</em></h3>
          <action-button onClick={this.handleClick}>
            {showHello ? 'Bye!' : 'Hello!'}
          </action-button>

          {showHello && <hello-world first="React" middle="&" last="Stencil" />}
        </header>
      </div>
    );
  }
}

export default App;
