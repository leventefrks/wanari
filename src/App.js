import React, {Component} from 'react';
// routing
import {Route, Switch, withRouter} from 'react-router-dom';
// main components
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
// static data
import user from './data/authentication';
//import airports from './data/airports'; main styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isFormInValid: false
    }
  }

  onUsernameChange(e, name) {
    this.setState({[name]: e.target.value});
  };

  onPasswordChange(e, name) {
    this.setState({[name]: e.target.value});
  };

  onClick = e => {
    const {username, password} = this.state;
    
    if (username === user.username && password === user.password) {
      this.setState(prevState => ({
        isFormValid: !prevState.isFormInValid,
        username: '',
        password: ''
      }));

      this.props.history.push('/dashboard');
    } else {
      this.setState({isFormInValid: true});
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (<Login
            onClick={this.onClick}
            passwordChange={e => this.onPasswordChange(e, 'password')}
            usernameChange={e => this.onUsernameChange(e, 'username')}
            isFormValid={this.state.isFormInValid}
            {...props}/>)}/>
          <Route path="/dashboard" exact render={props => (<Dashboard {...props}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);