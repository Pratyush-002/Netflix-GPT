import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { USER_PHOTO } from '../utils/constant';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)


  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())

  };


  const handleSignOut = () =>{
       signOut(auth).then(() => {
       navigate("/")
      }).catch((error) => {
       navigate("/error")
      })
   };

   useEffect (() => {
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} =user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
       
      }
    });

    return () => unsubscribe();

  }, [])


  return (
    <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
        className='w-44'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='header logo'/>

      {user && <div className='flex mt-[5px] bg-black rounded-full w-[19rem]'>
        <button className='py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-full font-bold'
        onClick={handleGptSearchClick}
          >GPT Search</button>
        <img className='w-12 h-12 m-3 rounded-full'
        src={USER_PHOTO}
        alt='profile logo'/>
        <button onClick={handleSignOut} className='text-white cursor-pointer font-bold'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header