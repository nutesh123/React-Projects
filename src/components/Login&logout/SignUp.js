import React from 'react'
import classes from './login.module.css'
import { useState ,useRef ,useContext } from 'react';
import AuthContext from './Context';


function SignUp() {

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        // optional: Add validation
        setIsLoading(true);
        let url;
        if (isLogin) {
          url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtoD6QjedIKtoqprTqP0WpkOSFr2iPMDw';
        } else {
          url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtoD6QjedIKtoqprTqP0WpkOSFr2iPMDw';
        }
        
        fetch(url,
            {
              method: 'POST',
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          ).then((res) => {
            console.log("kuchh bhi", res)
            setIsLoading(false);
            if (res.ok) {
              // ...
              return res.json() ;
              console.log("if res.ok")
            } else {
              console.log("kuchh bhi else")
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                 if (data && data.error && data.error.message) {
                  errorMessage = data.error.message;
                 }
          
                 throw new Error(errorMessage);
                });
              }
            })
            .then((data) => {
              console.log(data)
              authCtx.login(data.idToken);
              
            })
            .catch((err) => {
              alert(err.message);
            });
        };
  return (
    <section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' required ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Your Password</label>
        <input
          type='password'
          id='password'
          required
          ref={passwordInputRef}
        />
      </div>
      <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoading && <p>Sending request...</p>}
        <button
          type='button'
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
);
};

export default SignUp