import React from 'react'

function App() {
  return (<>
    <h1 className='pt-10 bg-blue-600 text-white font-bold text-6xl text-center h-35 '>Portfolio</h1>
    

    <main className='bg-blue-300 h-230 flex justify-center items-center flex-col'>


      <img src="ajpic.png" alt="Abdullah pic" srcset="" /><br /> <br />
     
      <div className='font-bold text-4xl' >Its Me ,<br /><span className='text-purple-500 text-5xl font-bold'>ABDULLAH JAWED</span> </div>
      
      <p className='pt-20 font-semibold text-3xl text-center '>I am Jawed a full-Stack developer having hands on MERN stack, <br /> and I am super trader certified from Vantage Exness & Dhan</p>


    </main>
    <hr />
    <section className='bg-white flex justify-center items-center flex-row'>

      
      <div className='bg-purple-500 h-70 rounded-3xl w-1/2 p-10 m-10'>
        <p className='text-white font-black text-2xl text-center'>MERN STACK </p>
       
          <br />
          <ul className='text-white font-black text-2xl  pl-5'>Mongo DB </ul>
             <ul className='text-white font-black text-2xl pl-5'>Express </ul>  
                <ul className='text-white font-black text-2xl pl-5'>React </ul>
                 <ul className='text-white font-black text-2xl pl-5' >Node JS </ul>
       
      </div>
      <div className='bg-blue-500 h-70 rounded-3xl w-1/2 p-10 m-10'>
        <p className='text-white font-black text-2xl text-center'>Trader</p>
           <br />
          <ul className='text-white font-black text-2xl pl-5'>Metals  (GOLD,SILVER) </ul>
             <ul className='text-white font-black text-2xl pl-5'>Oils  (US OIL) </ul>  
                <ul className='text-white font-black text-2xl pl-5'>Stocks (TATA,TESLA)</ul>
                 <ul className='text-white font-black text-2xl pl-5'>Crypto (BTC) </ul>
       

      </div>
      




    </section>

    <section className='bg-white flex justify-center items-center flex-col h-100 pt-100'>

      <p className='text-5xl font-bold'>Contact Me</p>
      <br /><br /><br />

      <form className='bg-purple-300 p-10 px-30 rounded-3xl' >
        <label htmlFor="name" className='pl-3 font-bold text-2xl'>Name:</label><br />
        <input type="text" placeholder='name' className='border-2 rounded-2xl h-10 pl-3 w-70' /><br /><br />
             <label htmlFor="email" className='pl-3 font-bold text-2xl'>Email:</label><br />
        <input type="email" placeholder='email' className='border-2 rounded-2xl h-10 pl-3 w-70' /><br /><br />
        <label htmlFor="Messege" className='pl-3 font-bold text-2xl'>Message:</label><br />
        <textarea  className='border-2 rounded-2xl h-10 pl-3 pt-2 w-70'placeholder='Message' ></textarea><br />

        <button className='h-10 p-auto ml-20 mt-10 rounded-2xl px-4 bg-purple-500'>Submit</button>


      </form>

    </section>
    



    </>
  )
}

export default App