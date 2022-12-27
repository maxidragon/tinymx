import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import LinkIcon from '@mui/icons-material/Link'
import QrCodeIcon from '@mui/icons-material/QrCode2'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import QR from './QR'

const ShortURL = props => {
    const shortURL = props.url
    const [showQRCode, setShowQRCode] = useState(false)
    return (
        props.toggle ? (
            <div>
        <Box class="shortUrlBox">

            <h1>Your short URL: </h1>
            <div id="shortUrl">
                <TextField
                    id="outlined-read-only-input"
                    label="Your short URL"
                    value={shortURL}
                    InputProps={{
                        readOnly: true,
                    }}
                />

            </div>
            <div id="shortUrlButtons">
                <IconButton aria-label="ContentCopy" onClick={() => navigator.clipboard.writeText(props.url)} title="Copy URL to clipboard">
                    <ContentCopyIcon />
                </IconButton>
                <IconButton href={props.url} target="_blank" aria-label="LinkIcon" title="Visit URL">
                    <LinkIcon />
                </IconButton>
                <IconButton aria-label="QrCodeIcon" onClick={() => setShowQRCode(!showQRCode)} title="Generate QR code">
                    <QrCodeIcon />
                </IconButton>
            </div>
            { showQRCode ? <QR value={shortURL} /> : null }

        </Box></div>) : (
            <></>
        )
    )
}

export default ShortURL