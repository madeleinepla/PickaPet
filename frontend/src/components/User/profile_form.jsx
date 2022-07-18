import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.updateUser(this.state)
      .then(this.props.receiveCurrentUser(this.state))
      .then(this.props.ownProps.history.push(`/users/${this.props.profile.id}`))
  }

  render() {
    // debugger
    // if (!this.state.username) return null;

    return <div className='edit-user-page-parent'>

      <form onSubmit={this.handleSubmit} className='edit-user-form'>
        <h1>Edit your info!</h1>

        <div className='edit-user-form-input'>
          <label> Username: 
            <input
              className='user-form-text-box'
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <label> Bio:
            <textarea
              className='user-form-text-box'
              rows="10"
              cols="30"
              value={this.state.bio}
              onChange={this.update('bio')}
            />
          </label>

          <input className='edit-user-submit-btn' type="submit" value='Save' />
        </div>
        
      </form>
    </div>
  }
}

export default ProfileForm;