import React from 'react'
import QRCode from 'react-qr-code'

const QR = props => {
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}>
            <QRCode
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={props.value}
            />
        </div>
    )
}
export default QR