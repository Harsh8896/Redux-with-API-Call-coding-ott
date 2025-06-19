import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-100 h-screen p-16'>
      <h1 className='text-4xl font-bold'>Hello home</h1>
      <p className='text-xl font-semibold mt-2'>Understanding React js with Redux</p>
      <div className='space-x-8 mt-14 font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Product</Link>

      </div>
    </div>
  )
}

export default Home