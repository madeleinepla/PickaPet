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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleDemo() {
    let demoUser = {
      email: "demoUser@demo.com",
      // username: demoUser,
      password: "123456"
    }

    let i = 0;

    const displayEmail = () => {
      const displayEmailInterval = setInterval(() => {
        this.setState({ email: demoUser["email"].slice(0, i + 1) })

        if (i >= demoUser["email"].length - 1) {
          clearInterval(displayEmailInterval);
          displayPassword();
        }

        i++;
      }, 75);
    }

    let j = 0;

    const displayPassword = () => {
      const displayPasswordInterval = setInterval(() => {
        this.setState({ password: demoUser["password"].slice(0, j + 1) })

        if (j >= demoUser["password"].length - 1) {
          clearInterval(displayPasswordInterval);
          this.props.login(demoUser).then(
            () => {
              this.props.closeModal();
              this.setState({
                email: "",
                password: ""
              })
            }
          )
        }

        j ++;
      }, 75);
    }

    // this.props.login(demoUser).then(
    //   () => {
    //     this.props.closeModal();
    //     this.setState({
    //       email: "",
    //       password: ""
    //     })
    //   }
    // )

    displayEmail();
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
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='session-form'>
        <div className='session-form-exit' onClick={this.props.closeModal}>
          <p>X</p>
        </div>

        <div className='session-form-input'>
          <div>
            <h1>Log in Here</h1>
          </div>

          <label>Email:
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>Password
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <div>{this.renderErrors()}</div>
          <div className='session-form-submit'>
            <input
              type="submit"
              value="Log In"
              onClick={this.handleLogin}
            />

            <input
              type="submit"
              value="Try a Demo"
              onClick={this.handleDemo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;