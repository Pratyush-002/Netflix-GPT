import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/Validation';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_photo } from '../utils/constant';


const Login = () => {

    const [signUpForm, setsignUpForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null)
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    

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
            //  Signed up 
            const user = userCredential.user;
              updateProfile(user, {
                  displayName: name.current.value , photoURL:"https://media.licdn.com/dms/image/D4D03AQFuB4a_U9jmuQ/profile-displayphoto-shrink_800_800/0/1704185385876?e=1712793600&v=beta&t=Vmtj6F7xNpN5GXmUEMqG6bGdkMQ3kPfh0OWMXiVhFzo",
               }).then(() => {
                const {uid, email, displayName, photoURL} =auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
                  // ...
               }).catch((error) => {
                 setErrorMsg(error.checkForValidation)
               });
              
            console.log(user)
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
    <div>
        <Header />
    <div className='absolute'>
        <img className='object-cover'
         src= {LOGIN_photo}
        alt='Login body img'/>
    </div>
    <form
    onSubmit={(e)=> e.preventDefault()}
     className='w-[28%] absolute p-12 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
            {signUpForm ? "Sign In" : "Sign Up"}
            </h1>
        {!signUpForm && (
            <input ref={name} type='text' placeholder='Full Name' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'>
            </input>)}
        <input 
            ref={email} type='text' placeholder='Email or Phone Number' className='p-[16px] my-2 w-full bg-black bg-opacity-20 border-white border rounded'/>
        <input 
            ref={password} type='password' placeholder='Password' className='p-[16px] my-2 w-full  bg-black bg-opacity-20 border-white border rounded'/>
            <p className='text-red-500'>{errorMsg}</p>
        <button className='py-2 px-6 my-4 w-full bg-red-600 rounded' onClick={onButtonClick}>{signUpForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-center cursor-pointer'>Forgot Password ?</p>
        <p className='pt-5 mt-5 cursor-pointer' onClick={toggleSignUpForm}>{signUpForm ? "New to Netflix? Sign up now" : "Already registerd! Sign in now"}</p>
    </form>
    </div>
  )
}

export default Login