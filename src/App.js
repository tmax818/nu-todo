import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import {items} from "./shared/items"

import ItemList from './components/ItemList'

class App extends Component {

  state = {items: items}
  
  render() {

    return (
   <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">To-Do</NavbarBrand>
          </div>
        </Navbar>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}
export default App;