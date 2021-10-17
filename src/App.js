import React, { Component, Fragment } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/users/Users"
import axios from 'axios';
import Alert from "./components/layout/users/Alert";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/layout/pages/About";
import Home from "./components/layout/pages/Home";
import User from "./components/layout/users/User";



class App extends Component {

  state = {
    users: [],
    user: {},
    alert: null
  }


  searchUser = async (text) => {
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        this.setState({users: res.data.items})
  }

  //Get a single Github user

  getUser = async (username) => {
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({user: res.data});
  }

  clearUser = () => {
    this.setState({users: []});
  }

  setAlert = (msg, type) => {
    this.setState({alert: {msg,type}})
    
    setTimeout(() => {
    this.setState({alert: null})
    },3000)
  }

  render() {  
    return (
      <Router>
      <div className="container-xxl">
        <Navbar setAlert={this.setAlert} clearUser={this.clearUser} searchUser={this.searchUser}/>

      <Switch>
          <Route exact path="/" render= {props => (
            <Fragment>
                <Alert alert={this.state.alert}/>
                <Users   users={this.state.users}/>
            </Fragment>
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path ="/user/:login" render={props => (
            <User {...props} getUser = {this.getUser} user={this.state.user}/>
          )}/>
      </Switch>
        
 


      </div>
      </Router>
  );  
  }
}

export default App;
