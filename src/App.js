import React, { Component } from 'react'
import './App.css';
import {items} from "./shared/items"

class App extends Component {

  state = {items: items}
  render() {
    console.log(this.state)
    return (
      <div>
        App
      </div>
    )
  }
}
export default App;