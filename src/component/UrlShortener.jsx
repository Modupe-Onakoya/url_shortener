import React, { useState } from 'react'
import asset from '../assets/asset'

const UrlShortener = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")

    function inputUrl(evt) {
        setUrl(evt.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const req = await fetch('https://cleanuri.com/api/v1/shorten',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `url=${encodeURIComponent(url)}`
            });
        const data = await req.json()
        console.log("hi")
        console.log(data)

    }



    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex justify-center pt-5 pb-5 bg-gray-700 mt-3'>
            <form className='max-sm:flex max-sm:flex-col space-y-2  ' style={{ backgroundImage: `${asset.bg_shorten_mobile}` }} onSubmit={handleSubmit}>
                <input type="text" value={url} onChange={inputUrl} placeholder='shorten a link here' className='max-sm:W-100 outline-none p-2 bg-white text-grey-300 rounded-sm' />
                <button className='bg-green-300 p-2 text-white rounded-sm'>Shorten it</button>
            </form>
        </div>
    )
}

export default UrlShortener 