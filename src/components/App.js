import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Hogs from './Hogs';

class App extends Component {
  constructor () {
      super() 
      this.state = {
      hog: hogs, 
      isGreased: false,
      sort: false,
      sortWeight: false 

    }
  }

  handleGreased = () =>  {
    let newHogs = []
    if (this.state.isGreased) {
      newHogs = hogs
    } else {
      newHogs = hogs.filter(hog => hog.greased === true)
    }
    this.setState( previousState => {
        return {
          ...previousState, 
          hog: newHogs, 
          isGreased: !previousState.isGreased
        }
    })
  }

  handleName = () => {
    let newHogs = []
    if (this.state.sort) {
      newHogs = hogs
    } else {
      newHogs = hogs.sort((a,b)=> (a.name < b.name) ? -1 : 1)
    }
    console.log(newHogs)
    this.setState( previousState => {
      return {
        ...previousState, 
        hog: newHogs, 
        sort: !previousState.sort
      }
    })
  }

  handleWeight = () => {
    let newHogs = []
    if (this.state.sort) {
      newHogs = hogs
    } else {
      newHogs = hogs.sort((a,b)=> (a.weight < b.weight) ? -1 : 1)
    }
    console.log(newHogs)
    this.setState( previousState => {
      return {
        ...previousState, 
        hog: newHogs, 
        sortWeight: !previousState.sortWeight
      }
    })
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <button onClick={this.handleGreased}>Greased Piggies</button>
        <button onClick={this.handleName}>Piggie Names</button>
        <button onClick={this.handleWeight}>Piggie Weight</button>
        {this.state.hog.map(hog => <Hogs hog={hog} />)}     
      </div>
    );
  }
}

export default App;
