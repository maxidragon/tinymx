import React from 'react'

const ShortURL = props => {
    const shortURL = props.url
    return (
        <div>
            <h1>Your short URL: </h1>
            {
            //TODO
            //Buttons for copy, visit and qrcode for url
            }
            <a className="shortUrl" href={shortURL} target="_blank" rel="noreferrer">{shortURL}</a>
        </div>
    )
}

export default ShortURL