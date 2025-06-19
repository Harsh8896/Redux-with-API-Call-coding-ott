import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {

  const {productSlice} = useSelector((res)=>res)

    if(!productSlice){
      return(
        <h1 className='text-6xl text-center mt-6'>Data not available in redux store</h1>
      )
    }
    

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 flex flex-col gap-2">
      <img src={productSlice.image} className='w-[60%] h-[250px] mx-auto ' alt="" />
      <h1 className='font-bold text-3xl'>{productSlice.title}</h1>
      <p className='text-lg text-gray-700'>{productSlice.description}</p>
      <label className='font-semibold text-xl capitalize py-2 px-2 bg-blue-600 text-white text-center'>{productSlice.category}</label>
    </div>
    </div>
  )
}

export default ProductDetails