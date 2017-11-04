import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is an app all about React</h1>
      </div>
    );
    // manually done with React.createElement... the above jsx gets run just like the next line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Manually done with react methods'));
  }
}

export default App;
