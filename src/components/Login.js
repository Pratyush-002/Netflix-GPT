import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/Validation';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [signUpForm, setsignUpForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null)

    const email = useRef(null);
    const password = useRef(null);
    // const fullName = useRef(null);

    const toggleSignUpForm = () =>{
        setsignUpForm(!signUpForm)
    }
    
    const onButtonClick = () =>{
        const checkForValidation = checkValidation(email.current.value, password.current.value)
        setErrorMsg(checkForValidation);
        if (checkForValidation) return;

        if(!signUpForm) {
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
             // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
             })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg (errorCode+ " " + errorMessage )
            // ..
            });

        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
               // Signed in 
               const user = userCredential.user;
               console.log(user);
                // ...
               })
              .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg( errorCode + " " + errorMessage)
              });


        }
    };

  return (
    <div><Header />
    <div>
        <img className='absolute'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
        alt='Login body img'/>
    </div>
    <form
    onSubmit={(e)=> e.preventDefault()}
     className='w-[28%] absolute p-12 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
            {signUpForm ? "Sign In" : "Sign Up"}
            </h1>
        {!signUpForm && (
            <input type='text' placeholder='Full Name' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'>
            </input>)}
        <input 
            ref={email} type='text' placeholder='Email or Phone Number' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'/>
        <input 
            ref={password} type='text' placeholder='Password' className='p-[16px] my-2 w-full  bg-black bg-opacity-20 border-white border rounded'/>
            <p className='text-red-500'>{errorMsg}</p>
        <button className='py-2 px-6 my-4 w-full bg-red-600 rounded' onClick={onButtonClick}>Sign In</button>
        <p className='text-center cursor-pointer'>forgot Password ?</p>
        <p className='pt-5 mt-5 cursor-pointer' onClick={toggleSignUpForm}>{signUpForm ? "New to Netflix?Sign up Now" : "Already Registerd!Sign in Now"}</p>
    </form>
    </div>
  )
}

export default Login