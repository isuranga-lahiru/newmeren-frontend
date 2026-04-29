import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { BiKey } from "react-icons/bi"
import { ImGoogle, ImGoogle2 } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"


export default function loginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleLogin() {
  // Here you would typically send a request to your backend to authenticate the user.
  // For demonstration purposes, we'll just log the email and password to the console.
  console.log("Email:", email);
  console.log("Password:", password);
  toast.success("Login successful!"); // Show a success toast message
  await axios.post("http://localhost:3000/users/login", { email, password })
}
  return (
    <div className="w-full h-full bg-[url('./login-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
    
      <div className="w-100 h-125 backdrop-blur-md shadow-2xl shadow-amber-50 rounded-2xl flex flex-col ">
        <h1 className="text-4xl font-bold text-center mt-10 text-amber-50">Login</h1>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative mt-4">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={
              (e)=>{
                console.log(e.target.value)
                setEmail(e.target.value)
              }
            }
              className="h-10 w-full bg-amber-100 text-amber-800 placeholder:text-amber-500 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl pl-10"
            />
          </div>
          <div className="relative mt-4">
            <BiKey className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
            <input 
            type="password"
            placeholder="Password"
            onChange={
              (e)=>{
                console.log(e.target.value)
                setPassword(e.target.value)
              }
            }
            value={password}
            className="h-10 w-full bg-amber-100 text-amber-800 placeholder:text-amber-500 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl pl-10"/>
          </div>
          <p className="text-amber-500 text-sm">
            Forgot your password?<Link to="/reset-password" className="text-blue-500 hover:underline ml-1">click here</Link>
          </p>
          <button className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out " onClick={handleLogin}>
            Sign in
          </button>
          <p className="text-amber-500 text-sm">
            Don't have an account?<Link to="/signup" className="text-blue-500 hover:underline ml-1">Sign up</Link>
          </p>
          
          <button className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"><ImGoogle className="inline-block mr-2 rounded-2xl size-4" />
            Sign in with Google
          </button>
        </div>
      </div>
    
    </div>
  )
}
