import React from 'react'
import Cards from '../Components/Cards'
import Nav from '../Components/Nav'

const Home = () => {
  return (
    <div className='pb-10 bg-fixed' 
    style={{ 
      backgroundImage: `url("/assets/bgimage-removebg-preview1.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
        <Nav/>
        <div className="lg:container lg:mx-auto">
            <div className="flex justify-center my-5 md:text-4xl text-2xl text-center font-semibold">
                <h1 className='capitalize '>Welcome To <span className='text-green-700'>Abili integrated Service</span>  dashboard</h1>
            </div>
                <hr className='md:w-[400px] mx-auto w-[200px] mb-10'/>
                <Cards/>
        </div>
        
    </div>
  )
}

export default Home