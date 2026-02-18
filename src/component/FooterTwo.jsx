import React from 'react'
import asset from '../assets/asset'

const FooterTwo = () => {
    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 pt-10 text-sm flex max-sm:flex-col items-center text-white bg-gray-700 justify-center gap-10'>
            <div className='grid sm:grid-cols-4'>
                <img src={asset.logo} alt="" className='bg-white p-2 sm:size-20' />

                <ul className='max-sm:pt-5 space-y-2 flex flex-col items-center'>
                    <li className='font-bold '>
                        Features
                    </li>
                    <li>
                        Link Shortening
                    </li>
                    <li>
                        Branded Links
                    </li>
                    <li>
                        Analytics
                    </li>
                </ul>

                <ul className='space-y-2 pt-5  flex flex-col items-center'>
                    <li className='font-bold' >
                        Resources
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Developers
                    </li>
                    <li>
                        Support
                    </li>
                </ul>
                <ul className='space-y-2 pt-5  flex flex-col items-center'>
                    <li className='font-bold'>
                        Company
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Our team
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

            </div>
            <ul className='flex gap-4 pt-2'>
                <li>
                    <img src={asset.icon_facebook} alt="" />
                </li>
                <li>
                    <img src={asset.icon_twitter} alt="" />

                </li>
                <li>
                    <img src={asset.icon_pinterest} alt="" />

                </li>
                <li>
                    <img src={asset.icon_instagram} alt="" />

                </li>
            </ul>
        </div>
    )
}

export default FooterTwo