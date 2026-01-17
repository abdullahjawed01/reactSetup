import { useState } from 'react'

import './App.css'

function App() {

 const [age, setage] = useState(20)

 let fullName = "Abdullah"
  
 const [hobbies,setHobbies] = useState(["hello","world","Bye"])

  return (
    <>
    <div className='flex flex-col text-center  content-center'>
     <h1 className='text-4xl flex  place-content-center text-blue-500'>Hello world</h1>
     <p>My Full name is : {fullName}</p>
     <p>My age is : {age}</p>
     <button className='bg-blue-500 text-white p-2 m-2 cursor-pointer rounded-2xl mx-200  ' onClick={()=>{
      setage(age+1)
     }}>Increase Age</button>
      <button className='bg-blue-500 text-white p-2 m-2 cursor-pointer rounded-2xl mx-200 ' onClick={()=>{
        if(age<=0)return;
      setage(age-1)
     }}>Decrease Age</button>
     <p className='bg-blue-500'> Status: {age >=18 ? "Major" : "Minor"}</p>
     {age >= 20 && <p>Senior Citizen</p>}
     </div>

     {
      hobbies.map((x,i)=>(
        <p key={i}> my hobbies {i+1} : {x}</p>
        
      )
    )}
     
    </>
  )
}

export default App
