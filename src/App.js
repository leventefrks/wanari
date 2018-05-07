import React, { Component } from 'react';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
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
    if (username === 'wnr' && password === 'wnr'){
      this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
    } else {
      this.setState((prevState) => ({ isValid: !prevState.isValid }));
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
