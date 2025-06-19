import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { storeProduct } from '../Redux/slices/product-slice'

const Products = () => {

  const [product, setProduct] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")

    .then((response)=>
       response.json()
    )
    .then((data)=>{
   setProduct(data)
         
    })
    .catch((err)=>{
       console.log(err);
    })
  },[])

  const viewProducts = (item) =>{
    dispatch(storeProduct(item))
    navigate("/product-details")
    
  }

  return (
    <div className='bg-gray-100 min-h-100 flex flex-col items-center py-16'>
      <div className='bg-white p-8 text-center shadow rounded-lg'>
        <h1 className='text-5xl font-bold'>Reduc App</h1>
        <p className='text-gray-600 text-lg mt-2'>Click on any product to test your redux app</p>
      </div>
      <div className='w-11/12 mx-auto bg-white rounded-lg shadow p-8 mt-14'>
      <div className='grid grid-cols-4 gap-8'>
        {
          product.map((item, index)=>{
            return(
               <div className='border border-2-gray-800 shadow-lg p-3 flex flex-col gap-3' key={index}>
                <img src={item.image} className='w-full h-[220px]'  alt="" />
                <p>{item.title}</p>
                <p className='text-center font-bold'>₹{item.price * 2}</p>
                <p className='font-semibold text-lg'>{item.category}</p>
                <button onClick={()=>viewProducts(item)} className='bg-lime-800 text-white p-1 rounded-md text-center'>View Product Details</button>
               </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Products