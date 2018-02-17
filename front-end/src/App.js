import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header_homepage from "./components/Header_homepage"
import Content_homepage from "./components/Content_homepage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_homepage />
        <Content_homepage />
      </div>
    );
  }
}

export default App;
