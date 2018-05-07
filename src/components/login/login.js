import React, { Component } from 'react';
import Messages from '../../data/messages';

export default class Login extends Component {

    render() {
      return (
        <div className="container">
            <div className="login-form">
                <input
                  type="text"
                  className="login-form__username"
                  placeholder="username"
                  onChange={this.props.usernameChange }
                />
                 
                 <input
                  type="text" 
                  className="login-form__password" 
                  placeholder="password"
                  onChange={this.props.passwordChange}
                 />
                 
                  <button
                    type="button" 
                    className="login-form__cta"
                    onClick={this.props.onClick}>
                    login
                  </button>
                  {
                    (this.props.isFormValid) 
                    ? 
                    <span className={"login-form__message " + (this.props.isFormValid ? 'login-form__message--error' : '')}>{Messages}</span>
                    :
                    <span className="login-form__message"></span>
                  }
          </div>
        </div>
      );
    }
  }
  