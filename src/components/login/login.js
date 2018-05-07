import React, { Component } from 'react';

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
                  onClick={this.props.onClick}>login</button>
                  {
                    (this.props.isLoggedIn) 
                    ? 
                   ''
                    :
                    <span class="login-form__error-message"> Sorry, the username and/or password is incorrect, please try again!</span>
                  }
        </div>
        </div>
      );
    }
  }
  