
import React from 'react'

const StatisticsCard = ({ img, head, desc }) => {
    return (
        <div className=' bg-white '>
            <img src={img} alt="" className='m-auto bg-gray-300 p-4 rounded-full' />
            <h1>{head}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default StatisticsCard 