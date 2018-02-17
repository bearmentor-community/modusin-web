import React, { Component } from 'react';
import {Container} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import ReadPost from './pages/ReadPost'
import TopUnAuthNavBar from './components/TopUnAuthNavBar'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={TopUnAuthNavBar}/>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/read-post" component={TopUnAuthNavBar}/>
        <Route path="/read-post" component={ReadPost}/>
      </div>
      </Router>
    );
  }
}

export default App;
