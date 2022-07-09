import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import InstructionModal from './instruction_modal';

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
    case 'instructions':
      component = <InstructionModal closeModal={closeModal}/>
      break;
    default:
      return null;
  };

  return (
    <div className='modal' onClick={closeModal}>
      <div className='modal-form' onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;