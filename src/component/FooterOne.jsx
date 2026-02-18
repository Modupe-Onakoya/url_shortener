
import React from 'react'
import asset from '../assets/asset'

const FooterOne = () => {
    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex flex-col  items-center pt-10 gap-3 pb-5' style={{ backgroundImage: asset.big_boost_desktop }}>
            <p>
                Boost your link today
            </p>
            <p>
                Get started
            </p>
        </div>
    )
}

export default FooterOne