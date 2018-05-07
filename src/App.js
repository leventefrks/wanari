import React, { Component } from 'react';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import user from './data/authentication';
import './App.scss';

// routing
import { Link, Route, Switch } from 'react-router-dom';

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

  render() {
    return (
      <div className="App"> 
      <Route path="/" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
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
