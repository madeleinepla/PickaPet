import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />
      break;
    case 'login':
      component = <LoginFormContainer />
      break;
    default:
      return null;
  };

  return (
    <div onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;