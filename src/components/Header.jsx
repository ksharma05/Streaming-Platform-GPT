import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { LOGO_URL, PROFILE_IMG_URL, LANGUAGE_OPTIONS } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLangPref } from '../utils/configSlice';



const Header = () => {
  const userData = useSelector((store)=>store.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGptSearchEnable = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // dispatch(removeUser());
      // Sign-out successful.
    }).catch((error) => {
      navigate("/")
    });
  }

  const gptSearchClickHandler = () =>{
    dispatch(toggleGptSearch());
    
    
  }

  const langChangeHandler = (e)=>{
    dispatch(changeLangPref(e.target.value));
  }
 
  return (
    <div className='w-screen fixed md:px-44 flex-col flex md:flex-row justify-between items-center z-50 '>
      <div >
        <img src={LOGO_URL} alt='Logo' className='w-24 md:w-48 ' />
      </div>
      <div className='flex justify-between'>
       {isGptSearchEnable &&  <select className='bg-gray-500 p-2 rounded-md' onChange={(e)=>langChangeHandler(e)}>
          {/* <option defaultChecked disabled>--Language--</option> */}
          {LANGUAGE_OPTIONS.map(lang=><option key={lang.value} value={lang.value}>{lang.text}</option>)}
        </select>}
        <button className='bg-purple-800 text-sm text-white rounded-md p-1 md:p-2 ml-4' onClick={gptSearchClickHandler}>GPT Search</button>
        {userData && <button className='bg-red-500 text-white rounded-md p-2 ml-4' onClick={handleSignOut}> Sign out, {userData.name}</button>}
      </div>
    </div>
  )
}

export default Header