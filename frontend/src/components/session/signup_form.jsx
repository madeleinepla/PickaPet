import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
    }

    this.update = this.update.bind(this);
    this.handleSignup = this.handleSignup.bind(this)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => {
        if (this.props.isAuthenticated) {
          this.props.closeModal();

          this.setState({
            email: '',
            username: '',
            password: '',
            password2: ''
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
        <h1>Sign up Here</h1>
        <label>Email:
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
        <label>Username:
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.update('username')}
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
        <label>Confirm Password
          <input
            type="text"
            placeholder="password"
            value={this.state.password2}
            onChange={this.update('password2')}
          />
        </label>
        <div>{this.renderErrors()}</div>
        <div>
          <input
            type="submit"
            value="Sign Up"
            onClick={this.handleSignup}
          />
        </div>
      </div>
    )
  }
}

export default SignupForm;
