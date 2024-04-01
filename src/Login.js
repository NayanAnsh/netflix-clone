import React, { useState } from 'react'
import './login.css'
import SignInScreen from './SignInScreen';
const Login = () => {
  const [signIn , setSignIn] = useState(true);
  return (
    <div style={{background:`url("https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/95bae10c-9773-4447-af4e-612a244231bd/IN-en-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg")`}} className='loginScreen' >
        <div className='top--tranform' />
        <div className='loginScreen_background'>
        <img className='loginScreen_logo' src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' />
        <button onClick={()=> setSignIn(true)} className='loginScreen_button' >sign in</button>
        
        </div>
        <div className='loginScreen_gradient' />
        <div className='loginScreen_body'>
            {signIn ? (

                <SignInScreen/>
            ): (
              <>
              <h1> Unlimited films , TV programs and 
              more. </h1>
            <h2> watch anywhere. Cancel at any time</h2>
            <h3> Enter your email</h3>
            <div className='loginScreen_input'>
              <form>
                <input type="email" placeholder='Email Address' />
                <button onClick={()=> setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button>
              </form>
            </div>
              </>
            )}
            
        </div>

    </div>
  )
}

export default Login