import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser, signOutAsync } from './features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const dispatch=useDispatch()
  const user=useSelector(selectLoggedInUser)
  const handleSubmit=(e)=>{
     e.preventDefault();
       dispatch(signOutAsync());
       
  }
  return (
  <>
  <div>Home</div>
  <button onClick={(e)=>handleSubmit(e)}>Signout</button>
  </>
  )
}

export default Home