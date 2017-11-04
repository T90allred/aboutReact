import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Derek', age: 27 },
      { name: 'Sam', age: 22 },
      { name: 'Jake', age: 22 },
      { name: 'Izzy', age: 22 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is an app all about React</h1>
        <p>Remember that each component needs a parent wrapper element!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Role: Admin </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Role: Manager </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Role: Cook </Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}> Role: Host </Person>
      </div>
    );
    // manually done with React.createElement... the above jsx gets run just like the next line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Manually done with react methods'));
  }
}

export default App;
