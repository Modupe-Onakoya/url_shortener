
import React from 'react'

const StatisticsCard = ({ img, head, desc }) => {
    return (
        <div className='relative '>
            <img src={img} alt="" className='sm:m-auto bg-gray-800 p-4 rounded-full absolute top-[-30px] left-25' />

            <div className=' bg-white sm:w-70 py-12 px-5 max-sm:w-70'>
                <h1>{head}</h1>
                <p className=''>{desc}</p>
            </div>
        </div>
    )
}

export default StatisticsCard 