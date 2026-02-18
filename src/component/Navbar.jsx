
import React, { useState } from 'react'
import asset from '../assets/asset'

const Navbar = ({ isOpen, setIsOpen }) => {




    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex max-sm:justify-between max-sm:pt-5 max-sm:flex-col gap-5 pt-5'>

            <div className='flex max-sm:justify-between'>
                <h1 className='font-bold text-2xl -black'>Shortly</h1>
                <img src={isOpen ? asset.close_icon : asset.menu_icon} className={`${isOpen ? "size-5" : "size-10"} sm:hidden`} alt="" onClick={() => { setIsOpen(!isOpen) }} />
            </div>

            <div className={`${isOpen ? "max-sm:block max-sm:relative " : "max-sm:hidden overflow-hidden max-sm:absolute "}max-sm:rounded-sm  max-sm:mt-4 rounded-lg  max-sm:bg-[S~hsl(257, 27%, 26%)] sm:flex sm:items-center sm:justify-between w-[100%] `}>


                <ul className='flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:mt-5  max-sm:gap-3 max-sm:py-2 sm:gap-5  '>
                    <li>Features </li>
                    <li>Pricing</li>
                    <li className='max-sm:pb-4'>Resources</li>

                </ul >
                <ul className='flex max-sm:flex-col max-sm:items-center   max-sm:gap-4 max-sm:py-2 space-y-2 sm:space-x-4'>
                    <li className='max-sm:border-t max-sm:pt-4 max-sm:w-[80%] max-sm:text-center hover:text-gray-300 text-black'> Login</li>
                    <li className='bg-green-300 max-sm:px-30 px-4 py-1 max-sm:py-2 rounded-full'>Sign up</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar