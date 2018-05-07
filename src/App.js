import React, { Component } from 'react';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import user from './data/authentication';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      isValid: false
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
      this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn, isValid: !prevState.isValid }));
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div className="App">
      <Login 
      onClick={this.onClick} 
      passwordChange={e => this.onPasswordChange(e,'password')} 
      usernameChange={e => this.onUsernameChange(e,'username')} 
      isValid = {this.state.isValid} />
      </div>
    );
  }
}

export default App;
