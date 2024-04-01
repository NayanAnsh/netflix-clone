import React, { useEffect, useState } from 'react'
import "./banner.css"
import banner from "./images/banner.png"
import axios from './axios'
import requests from './requests'
const Banner = () => {
    const truncate = (string , n)=>{
            return string?.length > n ? string.substring(0,n-1) + "..." :string;
    }
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(requests.fetchNetflixOriginals);
                 setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
                
            }
             fetchData();
            
            return fetchData;
    },[])
    
  //  `url("https://cdn.hashnode.com/res/hashnode/image/upload/v1616836032931/-xlW6nX96.png")`
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        background: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition :"center",
        
        }}  >

            <div className='banner_contants'>
                <h1 className='banner_title' >
                    {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                <div className=''>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description' >  {truncate(movie?.overview,150)}</h1>
            </div>
            <div className='banner--fadeButton' />
        </header>
  )
}

export default Banner