import React, { useRef, useState } from 'react'
import asset from '../assets/asset'

const UrlShortener = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [copied, setCopied] = useState(false)
    function inputUrl(evt) {
        setUrl(evt.target.value)
    }

    function handleCopy() {
        navigator.clipboard.writeText(shortUrl)
        alert("copied")
    }
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const req = await fetch("http://localhost:5000/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url })
            })

            const data = await req.json()
            setShortUrl(data.shortUrl)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='px-8 sm:px-12 lg:px-24 xl:px-40 flex flex-col justify-center pt-5 pb-5 mt-3 '>
            <form className='flex max-sm:flex-col sm:justify-center sm:items-center w-full  max-sm:space-y-4 bg-cover bg-[url("/bg-shorten-mobile.svg")] p-2  bg-cover rounded-sm' onSubmit={handleSubmit}>
                <input type="text" value={url} onChange={inputUrl} placeholder='shorten a link here' className='max-sm:W-100 outline-none sm:space-x-2 p-2 bg-white text-grey-300 rounded-sm sm:mr-5 sm:w-[80%] ' />
                <button className='bg-green-300 p-2 sm:px-4 text-white rounded-sm'>Shorten it</button>
            </form>
            {shortUrl !== "" ? <div className='flex flex-col items-center mt-4 bg-gray-200 rounded-sm gap-2 py-2'>

                <p>
                    {shortUrl}
                </p>
                <hr className='bg-white w-full' />
                <p className='bg-green-300 py-2 max-sm:w-[90%] sm:w-[20%] text-white rounded-sm text-center ' onClick={handleCopy}>
                    copy
                </p>
            </div> : null}
        </div>
    )
}

export default UrlShortener 