import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { QuerySnapshot, collection } from 'firebase/firestore';

const PlanScreen = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        collection(db,"products")
       .then(querySnapshot =>{
            const products = {};
            querySnapshot.forEach(async prodctDoc =>{
                products[prodctDoc.id] = prodctDoc.data();
            })
        });
    },[]);
  return (

    <div className='PlanScreen'>
        
    </div>
  )
}

export default PlanScreen