import React from 'react'

const Contact = () => {
  return (
    <div className=' flex text-black justify-center h-screen'>
        <div className=' flex justify-center  w-1/2 bg-slate-300 h-4/5 m-4  '>
            <form className='flex flex-col justify-center space w-full p-2 space-y-10 '  action="">
                <input className='bg-gray-700 hover:bg-gray-800 border-none rounded-lg text-sm h-8 text-white ring-orange-600' type="text" placeholder='Name' />
                <input className='bg-gray-700 hover:bg-gray-800 border-none rounded-lg text-sm h-8 text-white ring-orange-600' type="email" placeholder='Email' />
                <input className='bg-gray-700 hover:bg-gray-800 border-none rounded-lg text-sm h-32 text-white ring-orange-600' type="text" placeholder='Suggestion'/>
            </form>
        </div>
    </div>
  )
}

export default Contact