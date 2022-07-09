import React from 'react';

const InstructionModal = ({ closeModal }) => {
  return (
    <div className='instruction-modal'>
      <div className='session-form-exit' onClick={() => closeModal()}>
        <p>X</p>
      </div>

      <div className='session-form-input'>
        <h1>What is Picka Pet?</h1>
        <p>
          Picka Pet is a place where you get to adopt your own virtual pet!
          First head to the pet store to pick your favorite pet. (Each one costs
          50 points). Then go to your profile page to start feeding, petting, 
          and loving your pet! You'll earn points every time you interact with 
          your pet, which means you'll be able to adopt even more. 4 is the most
          amount of pets you can adopt. Choose wisely, it's a big responsibility!
        </p>
      </div>
    </div>
  );
};

export default InstructionModal;