import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const[length,SetLength]=useState(8)
  const[numberAllowed, SetNumberAllowed]=useState(false)
  const[charAllowed, SetCharAllowed]=useState(false)
  const[password, setPassword]=useState('')

/////////////////////////////////
  const passRef=useRef(null)


  //////////////////////////
  const generatePassword = useCallback(()=>{
    let pass= ''
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str +="!@#$%^&*()_+"
    for(let i=1; i<length; i++){
      const char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }    
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  ///////////////////////////////

  const copyPass=()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

////////////////////////////////////

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  return (
   
   <div>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden'>
        <input type="text"
        value={password}
        placeholder='Password'
        className='outline=none w-full py-1 px-3'
        readOnly
        ref={passRef}
        />
        <button
        onClick={copyPass}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-1'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>SetLength(e.target.value)}
          name='' />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            SetNumberAllowed((prev)=>!prev)
          }} 
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            SetCharAllowed((prev)=>!prev)
          }} 
          />
          <label htmlFor="number">Character</label>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App
