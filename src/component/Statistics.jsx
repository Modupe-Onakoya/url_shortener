
import React from 'react'
import asset from '../assets/asset'
import StatisticsCard from './StatisticsCard'


const Statistics = () => {
    const statistics = [
        {
            img: asset.icon_brand_recognition,
            head: "Brand Recognition",
            desc: "Boost your brand recognition with each clicks.Generic links dont mean a thing Branded links helps insitll confidence i your business"

        },
        {
            img: asset.icon_detailed_records,
            head: "Brand Recognition",
            desc: "Boost your brand recognition with each clicks.Generic links dont mean a thing Branded links helps insitll confidence i your business"

        }, {
            img: asset.icon_fully_customizable,
            head: "Brand Recognition",
            desc: "Boost your brand recognition with each clicks.Generic links dont mean a thing Branded links helps insitll confidence i your business"

        },
    ]
    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 pt-10 bg-gray-200 '>
            <h1 className='text-center font-bold text-2xl'>
                Advanced Statistics
            </h1>
            <p className='text-sm text-center  pt-2 text-gray-400 sm:flex sm:flex-col sm:gap-2 sm:text-lg'>
                Track how your links are performing across the web  <span>with our advanced statistics dashboard.</span>
            </p>

            <div className='pt-5 pt-10 max-sm:space-y-10 sm:flex gap-6 sm:justify-center sm:items-enter '>
                {statistics.map((stats, index) => (
                    <StatisticsCard img={stats.img} head={stats.head} desc={stats.desc} />
                ))}
            </div>
        </div>
    )
}

export default Statistics