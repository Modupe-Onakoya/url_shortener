
import React from 'react'
import asset from '../assets/asset'

const Navbar = () => {
    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex max-sm:justify-between'>
            <h1>Shortly</h1>
            <img src={asset.menu_icon} className='size-10' alt="" />
            <ul className='hidden sm:block'>
                <li>Features </li>
                <li>Pricing</li>
                <li>Resources</li>

            </ul>
            <ul className='hidden sm:block'>
                <li>Sign up</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navbar