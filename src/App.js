import React, { Component } from 'react';
import './App.css';
import { people } from "./people.js";
import PeopleList from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount(){
    this.setState({ people: people });
  }

  render() {
    return (
      <div className="App">
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
