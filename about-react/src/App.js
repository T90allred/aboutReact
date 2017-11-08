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

  switchNameHandler = (newName) => {
    // DONT DO: this.state.persons[0].name = 'Derek Allred'
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Sam Allred', age: 22 },
        { name: 'Jake Carter', age: 22 },
        { name: 'Izzy Carter', age: 22 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Derek', age: 27 },
        { name: event.target.value, age: 22 },
        { name: 'Jake', age: 22 },
        { name: 'Izzy', age: 22 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'tomato',
      font: 'inherit',
      boder: '3px solid blue',
      padding: '8px',
      borderRadius: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is an app all about React</h1>
        <p>Remember that each component needs a parent wrapper element!</p>
        <button 
          style={style}
          onClick={ () => this.switchNameHandler('Maxy') }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'D-Rock')}> Role: Admin </Person>
        <Person 
          name={this.state.persons[1].name}   
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}> Role: Manager </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> Role: Cook </Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}> Role: Host </Person>
      </div>
    );
    // manually done with React.createElement... the above jsx gets run just like the next line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Manually done with react methods'));
  }
}

export default App;
