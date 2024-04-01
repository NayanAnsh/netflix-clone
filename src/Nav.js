import React, { useEffect, useState } from 'react'
import banner from "../src/images/nayanflix.jpg"
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate()
    
    const [show,handleShow] =useState(true);
    
    const transitionNavbar = ()=>{
            if(window.scrollY <100){
                handleShow(true);
            }else{
                handleShow(false);
            }
    }
    const handleProfileIconClick = ()=>{
            navigate("/profile");
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=>{window.removeEventListener("scroll",transitionNavbar)}

    },[])
    //https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
  return (
    
    <div className={` ${show && "nav_black"} nav`} >
        <div className='nav_contents'>
            <img className='nav_logo' src={banner} alt="netflix"/>
            <img className='nav_avatar' onClick={handleProfileIconClick}  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
        </div>   
    </div>
  )
}

export default Nav