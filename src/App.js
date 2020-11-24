import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import {items} from './shared/items'
class App extends Component {

  state = {items: items}
  render() {
    console.log(this.state.items)
    return (
   <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">To-Do</NavbarBrand>
          </div>
        </Navbar>
   
      </div>
    )
  }
}
export default App;