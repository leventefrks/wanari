import React, { Component } from 'react';
// routing
import { Route, Switch, Redirect } from 'react-router-dom';
// main components
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
// static data 
import user from './data/authentication';
import airports from './data/airports';
// main styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      isFormValid: false
    }
  }

  onUsernameChange(e, name) {
    this.setState({ [name]: e.target.value });
  };

  onPasswordChange(e, name) {
    this.setState({ [name]: e.target.value });
  };

  onClick = e => {
  let { username, password } = this.state;
    if (username === user.username && password === user.password){
      this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn, isFormValid: !prevState.isFormValid }));
    } else {
      this.setState({ isFormValid: true });
    }
  }

  renderCities = (props) => {
    const cities = airports.map((airport,id) =>
      <li key={id}>{airport}</li>
    );
    return cities;
  }

  render() {
    return (
      <div className="App"> 
      <Switch>
        <Route path="/" exact 
         render={(props) => (<Login onClick={ this.onClick }
         passwordChange={ e => this.onPasswordChange(e,'password') } 
         usernameChange={ e => this.onUsernameChange(e,'username') } 
         isFormValid = { this.state.isFormValid } {...props}/>)}/>
        <Route path="/dashboard" exat component={Dashboard}/>
      </Switch>
      </div>
    );
  }
}

export default App;

/*
<Login 
        onClick={ this.onClick } 
        passwordChange={ e => this.onPasswordChange(e,'password') } 
        usernameChange={ e => this.onUsernameChange(e,'username') } 
        isFormValid = { this.state.isFormValid } 
      />
      */
