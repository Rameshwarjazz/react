import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const[userName,setUserName] =useState('')
    const[password,setPassword] =useState('')

    const{setUser}=useContext(UserContext)

    const handleClick=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div className='flex bg-gray-800 items-center h-fit justify-center space-y-4'> 
        <div className='flex flex-col jusify-center space-y-2'>
        <h1 className='text-3xl flex justify-center text-white'>Login</h1>
        <input 
        value={userName}
        type="text"
        placeholder='Name'
        onChange={(e)=>setUserName(e.target.value)}
        />
        {' '}
        <input 
        value={password}
        type="password"
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className=' bg-blue-600 round-lg' onClick={handleClick}>Login</button>
        </div>
    </div>
  )
}

export default Login