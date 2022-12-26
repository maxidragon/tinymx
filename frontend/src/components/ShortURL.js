import React from 'react'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import LinkIcon from '@mui/icons-material/Link'
import QrCodeIcon from '@mui/icons-material/QrCode2'

const ShortURL = props => {
    const shortURL = props.url
    return (
        props.toggle ? (
        <div>

            <h1>Your short URL: </h1>
            <div id="shortUrl">
                <a className="shortUrl" href={shortURL} target="_blank" rel="noreferrer">{shortURL}</a>
            </div>
            <div id="shortUrlButtons">
                <IconButton aria-label="ContentCopy" onClick={() =>  navigator.clipboard.writeText(props.url)}>
                    <ContentCopyIcon />
                </IconButton>
                <IconButton href={props.url} target="_blank" aria-label="LinkIcon">
                    <LinkIcon />
                </IconButton>
                <IconButton aria-label="QrCodeIcon">
                    <QrCodeIcon />
                </IconButton>
            </div>
        </div>) : (
            <></>
        )
    )
}

export default ShortURL