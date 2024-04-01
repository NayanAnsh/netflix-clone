import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
          if(userAuth){
            dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email
            }))
          }else{
            dispatch(logout())
          }
        })

        return unsubscribe;
    },[dispatch]);
  const router = createBrowserRouter([
    {
      path:"/",
      element: <HomeScreen/>,
     
    },{
      path:"/profile",
      element:<ProfileScreen/>
    }
  ])
  
  return (
    
    <div   >
     
      
     { (!user) ? <Login/>:
     <RouterProvider router={router} /> }
    </div>
    
  );
}

export default App;
