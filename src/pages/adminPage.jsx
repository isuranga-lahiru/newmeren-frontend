import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { FaGift } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import React from 'react'
import AdminProductPage from './admin/adminProductPage'


export default function AdminPage() {
  return (
    <div className='w-full h-full flex bg-primary'>

        <div className='w-[300px] shrink-0 h-full bg-white flex flex-col shadow-2xl'>

            <div className='w-full h-[100px] flex items-center bg-gray-100 px-5 py-2.5  '>

                <img src="logo.png" alt="Admin logo" className='  h-40 object-cover' />

            </div>

            <Link to="/admin" className='w-full  p-4 text-xl text-gray-700 font-bold flex   items-center gap-4'>
                <FaCartShopping />
                <span  className='w-full h-full block '>Orders</span>
            </Link>

            <Link to="/admin/products" className='w-full  p-4 text-xl text-gray-700 font-bold flex   items-center gap-4'>
                <FaGift />
                <span  className='w-full h-full block '>Products</span>
            </Link>

            <Link to="/admin/users" className='w-full  p-4 text-xl text-gray-700 font-bold flex   items-center gap-4'>
                <FaUser />
                <span  className='w-full h-full block '>Users</span>
            </Link>
            

            
        </div>

        <div className='flex-1 h-full'>

            <Routes>
                <Route path="" element={<h1>Orders Page</h1>} />
                <Route path="products" element={<AdminProductPage/>} />
                <Route path="users" element={<h1>Users Page</h1>} />

            </Routes>


        </div>


    </div>
  )
}
