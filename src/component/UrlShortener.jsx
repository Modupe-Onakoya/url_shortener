import React, { useState } from 'react'
import asset from '../assets/asset'

const UrlShortener = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")

    function inputUrl(evt) {
        setUrl(evt.target.value)
    }
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     const req = await fetch("https://api-ssl.bitly.com/v4/shorten",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Authorization": "Bearer 22a0e16f9096dc5ddd36e60330906ebe7061c91e",
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 "long_url": url,
    //                 "domain": "bit.ly",
    //                 "group_guid": "Ba1bc23dE4F"

    //             })
    //         });
    //     const data = await req.json()
    //     console.log("hi")
    //     console.log(data)
    // };
    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     const req = await fetch("https://zenquotes.io/api/quotes/")
    //     const data = await req.json()
    //     console.log(data)
    // }


    // async function handleSubmit() {
    //     const req = await fetch("https://api.tinyurl.com/create", {
    //         method: "POST",
    //         headers: {
    //             "Authorization": "Bearer token",
    //             "Content-Type": "application/json"


    //         },
    //         body: JSON.stringify({
    //             "url": url,
    //             "domain": "tinyurl.com",

    //         })
    //     })

    //     const data = await req.json()
    //     console.log(data)




    // }
    function handleCopy() {
        navigator.clipboard.writeText(shortUrl)
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
            <form className='max-sm:flex max-sm:flex-col space-y-4 bg-cover bg-[url("/bg-shorten-mobile.svg")] p-2 bg-cover rounded-sm' onSubmit={handleSubmit}>
                <input type="text" value={url} onChange={inputUrl} placeholder='shorten a link here' className='max-sm:W-100 outline-none sm:space-x-2 p-2 bg-white text-grey-300 rounded-sm' />
                <button className='bg-green-300 p-2 text-white rounded-sm'>Shorten it</button>
            </form>
            {shortUrl !== "" ? <div className='flex flex-col items-center mt-4 bg-gray-200 rounded-sm gap-2 py-2'>

                <p>
                    {shortUrl}
                </p>
                <hr className='bg-white w-full' />
                <p className='bg-green-300 py-2 w-[90%] text-white rounded-sm text-center ' onClick={handleCopy}>
                    copy
                </p>
            </div> : null}
        </div>
    )
}

export default UrlShortener 