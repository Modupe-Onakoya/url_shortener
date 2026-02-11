
import React, { useState } from 'react'
import asset from '../assets/asset'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex max-sm:justify-between max-sm:pt-5 max-sm:flex-col'>

            <div className='flex max-sm:justify-between'>
                <h1 className='font-bold text-2xl'>Shortly</h1>
                <img src={isOpen ? asset.close_icon : asset.menu_icon} className={`${isOpen ? "size-5" : "size-10"} sm:hidden`} alt="" onClick={() => { setIsOpen(!isOpen) }} />
            </div>

            <div className={`${isOpen ? "max-sm:block relative " : "max-sm:hidden overflow-hidden absolute "}max-sm:rounded-sm  max-sm:mt-4 rounded-lg  container`}>


                <ul className='flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:mt-5  max-sm:gap-3 max-sm:py-2  '>
                    <li>Features </li>
                    <li>Pricing</li>
                    <li className='max-sm:pb-4'>Resources</li>

                </ul >
                <ul className='flex max-sm:flex-col max-sm:items-center   max-sm:gap-4 max-sm:py-2'>
                    <li className='max-sm:border-t max-sm:pt-4 max-sm:w-[80%] max-sm:text-center'>Sign up</li>
                    <li className='max-sm:bg-green-300 max-sm:px-10 max-sm:py-2 rounded-sm'>Login</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar