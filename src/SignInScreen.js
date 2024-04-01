import React, { useRef } from 'react'
import "./signInScreen.css"
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const SignInScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register =(e)=>{
            e.preventDefault();
            createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            .then((authUser)=>{
                    console.log(authUser)
                }).catch((e)=>{
                    alert(e.message);
                });

    }
    const signIn = (e)=>{

        e.preventDefault();
        signInWithEmailAndPassword(auth,emailRef.current.value , passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        }).catch((e)=>{
            alert(e.message);
        })
    }
  return (
    <div className='signInScreen ' >
        <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email"/>
        <input ref={passwordRef} placeholder='password' type='password'/>
        <button type='submit' onClick={signIn}  > Sign In</button>
        <h4> <span className='signInScreen_gray'> New to Netflix?</span>
            <span  className='signInScreen_link' onClick={register}  > Sign up now </span> </h4>
        </form>
    </div>
  )
}

export default SignInScreen