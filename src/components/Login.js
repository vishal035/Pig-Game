import React from 'react';
// import './Login.css';
import './login-1.css';

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
  } = props;
  return (
    <div className="Login">
      <div className="login-container">
        <main>
          <form>
            <label
              htmlFor="email"
              className="email text-edit mr-bottom input-label"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="emailInput"
              className="mr-bottom inp-1 text-edit"
              placeholder="&ldquo;somthing&commat;domain.com&rdquo; "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailerror}</p>
            <label
              htmlFor="password"
              className="password mr-bottom text-edit input-label"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="passwordInput"
              className="mr-bottom pass-inot-1 text-edit"
              minLength="8"
              placeholder="Secret Phrase"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button class="btn">Sign up</button> */}
            {hasAcc ? (
              <>
                <button onClick={handleLogin} className="btn">
                  Sign in
                </button>

                <p className="p1">
                  Don't have an account ?{' '}
                  <span onClick={() => setHasAcc(!hasAcc)}>Sign up</span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup} className="btn">
                  Sign up
                </button>
                <p className="p1">
                  Have an acccount ?
                  <span onClick={() => setHasAcc(!hasAcc)}> Sign in</span>
                </p>
              </>
            )}
          </form>
        </main>

        {/* <br></br>

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
        </div> */}
      </div>
    </div>
  );
};
export default Login;
