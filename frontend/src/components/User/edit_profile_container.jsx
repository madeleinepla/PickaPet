import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ProfileForm from './profile_form';

class EditProfileForm extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
  }

  render() {
    const { updateUser, user, ownProps } = this.props;
    // debugger;

    if (!user.username) return null;
    return (
      <ProfileForm
        updateUser={updateUser}
        profile={user}
        ownProps={ownProps}
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
    updateUser: (user) => dispatch(updateUser(user))
  }
};

export default connect(mSTP, mDTP)(EditProfileForm);