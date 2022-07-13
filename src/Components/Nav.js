import React from 'react'
import Clock from './Clock'

const Nav = () => {

  return (
        <div className='sticky top-0 z-50 bg-green-500'>
            <div className="flex flex-wrap place-items-center">
                <section class="mx-auto">
                    <nav class="flex justify-between items-center glass w-screen">

                        <div class="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
                           
                            <a class="text-3xl font-bold font-heading" href="#">
                           <img src="/assets/abili_logo.png" className='w-[180px]' alt="" />
                            </a>
                            <Clock/>    
                        {/* <div className="flex md:text-xl mx-5 text-right">
                            <h1 className='font-semibold rounded-lg bg-indigo-600 px-5 py-1 text-white shadow-lg cursor-pointer hover:translate-y-1 duration-300'>Sign In</h1>
                        </div> */}
                        </div>
                        
                    </nav>
                </section>
            </div>
        </div>
  )
}

export default Nav