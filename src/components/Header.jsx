import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { LOGO_URL, PROFILE_IMG_URL } from '../utils/constants';



const Header = () => {
  const selector = useSelector((store)=>store.user);
  const dispatch = useDispatch(appStore);
  const navigate = useNavigate();
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // dispatch(removeUser());
      // Sign-out successful.
    }).catch((error) => {
      navigate("/")
    });
  }
  return (
    <div className='w-full fixed px-44 flex justify-between items-center'>
      <div>
        <img src="" alt='Logo' className='w-48' />
      </div>
      <div>
        {selector && <button className='bg-red-500 text-white rounded-md p-2' onClick={handleSignOut}> Sign out, {selector.name}</button>}
      </div>
    </div>
  )
}

export default Header