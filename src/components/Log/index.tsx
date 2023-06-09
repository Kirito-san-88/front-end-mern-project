import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

interface LogProps {
  signup: boolean;
  signin: boolean;
}
const Log = (props: LogProps) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e: any) => {
    const target = e.target;
    if (target.id === 'register') {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (target.id === 'login') {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  // video arreter a 52  minutes

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? 'active-btn' : ''}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? 'active-btn' : ''}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
