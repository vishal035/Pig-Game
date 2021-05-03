import React from 'react';
import './Login.css';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAcc,
    setHasAcc,
    emailerror,
    passerror,
  } = props;
  return (
    <div className="Login">
      <div className="login-container">
        <p className="log">Login</p>

        <br></br>

        <label className="user">Username</label>
        <br></br>

        <input
          className="inp-1"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMsg">{emailerror}</p>
        <br></br>
        <label className="pass-1">Password</label>

        <br></br>

        <input
          className="pass-inot-1"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>

        <br></br>

        <div className="btn-container">
          {hasAcc ? (
            <>
              <button onClick={handleLogin} className="btn-de">
                Sign in
              </button>

              <p className="p1">
                Don't have an account ?{' '}
                <span onClick={() => setHasAcc(!hasAcc)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup} className="btn-de">
                Sign up
              </button>
              <p className="p1">
                Have an acccount ?
                <span onClick={() => setHasAcc(!hasAcc)}> Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
