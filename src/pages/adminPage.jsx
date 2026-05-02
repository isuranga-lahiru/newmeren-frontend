import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AdminPage() {
  return (
    <div className='w-full h-full flex bg-purple-600'>

        <div className='w-75 h-full bg-white flex flex-col'>
            
            <h1 className='text-xl font-bold p-4 bg-blue-700 width-50px'>Using link tag</h1>

            <Link to='/admin' className='block p-4 border-b bg-gray-400'>Orders</Link>
            <Link to='/admin/products' className='block p-4 border-b bg-gray-400'>Products</Link>
            <Link to='/admin/users' className='block p-4 border-b bg-gray-400'>Users</Link>
{/* Using link tag will not cause the page to reload and will keep the state of the application */}

        </div>

        <div className='w-[calc(100%-300px)] h-full bg-yellow-200'>

            <Routes>
                <Route path='/' element={<h1>Orders Page</h1>}></Route>
                <Route path='/products' element={<h1>Products Page</h1>}></Route>
                <Route path='/users' element={<h1>Users Page</h1>}></Route>
            </Routes>


        </div>


    </div>
  )
}
