import React, { Component } from 'react'
import './App.css';
import {items} from "./shared/items"

import ItemList from './components/ItemList'

class App extends Component {

  state = {items: items}
  
  render() {

    return (
      <div>
        <ItemList items={this.state.items}/>
      </div>
    )
  }
}
export default App;