import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.update = this.update.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => {
        if (this.props.isAuthenticated) {
          this.props.closeModal();

          this.setState({
            email: '',
            password: ''
          })
        }
      }
    )
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div onClick={this.props.closeModal}>X</div>
        <h1>Log in Here</h1>
        <label>Username:
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
        <label>Password
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
        </label>
        <div>{this.renderErrors()}</div>
        <div>
          <input
            type="submit"
            value="Log In"
            onClick={this.handleLogin}
          />
        </div>
      </div>
    )
  }
}

export default LoginForm;