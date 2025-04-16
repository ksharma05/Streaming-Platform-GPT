import React, { useEffect } from "react";
// import { signOut } from 'firebase/auth';
import {  Outlet, useNavigate } from "react-router";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      
        dispatch(addUser({uid:user.uid, email:user.email, name:user.displayName}));
        navigate('/browse');
       
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    }, );

    return ()=>unsubscribe();

  },[])


  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
