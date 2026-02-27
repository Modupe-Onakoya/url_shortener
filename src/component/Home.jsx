import React from 'react'
import asset from '../assets/asset'

const Home = ({ isOpen, serIsOpen }) => {
    return (
        <div className='px-8 px-8 sm:px-12 lg:px-24 xl:px-40 sm:flex flex-row justify-between items-center'>

            <img src={asset.illustration_working} alt="" className={`${isOpen ? "max-sm:hidden" : "max-sm:block"} sm:hidden`} />
            <div className='sm:space-y-3'>
                <p className='max-sm:text-center flex flex-col font-bold text-4xl sm:text-5xl pt-2'>
                    More than just <span>shorter links</span>
                </p>
                <p className='max-sm:flex max-sm:flex-col max-sm:items-center text-gray-400 pt-2 sm:text-sm'>
                    Build your brands recognition and <span>get detailed insights on how your</span>  <span>links are performed</span>
                </p>
                <p className='bg-gray-300 px-4 w-30 text-center py-2 rounded-full text-white font-bold hidden sm:block'>
                    Get Started
                </p>

            </div>

            <img src={asset.illustration_working} alt="" className={`  max-sm:hidden `} />


        </div>

    )
}

export default Home