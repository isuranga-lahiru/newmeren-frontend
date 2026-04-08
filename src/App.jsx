import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'

function App() {
  return (
    <div className='w-full  h-screen '>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/admin/*' element={<AdminPage />} />

       
      </Routes>
    </div>
  )
}

export default App