import React, { useState, useEffect } from 'react';
import fire from './fire';
import Login from './Login';
import Blog from './blog';

const Main = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passerror, setPassError] = useState('');
  const [hasAcc, setHasAcc] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearError = () => {
    setEmailError('');
    setPassError('');
  };

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPassError(err.message);
            break;
          default:
            console.log('Somthing went wrong');
        }
      });
  };

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPassError(err.message);
            break;
          default:
            console.log('Somthing went wrong');
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListeners = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListeners();
  }, []);

  return (
    <div>
      {user ? (
        <Blog handleLogout={handleLogout}></Blog>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAcc={hasAcc}
          setHasAcc={setHasAcc}
          emailerror={emailerror}
          passerror={password}
        />
      )}
    </div>
  );
};

export default Main;
