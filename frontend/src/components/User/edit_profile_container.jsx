import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ProfileForm from './profile_form';

class EditProfileForm extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
  }

  render() {
    const { updateUser, receiveCurrentUser, user, ownProps } = this.props;
    // debugger;

    if (!user.username) return null;
    return (
      <ProfileForm
        updateUser={updateUser}
        profile={user}
        ownProps={ownProps}
        receiveCurrentUser={receiveCurrentUser}
      />
    );
  }
}

const mSTP = (state, ownProps) => {
  // debugger
  return {
    user: state.entities.users.user,
    ownProps
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  }
};

export default connect(mSTP, mDTP)(EditProfileForm);