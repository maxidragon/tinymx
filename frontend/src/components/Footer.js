import React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'

function Footer() {

    return (
        <div id="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    TinyMX
                </Typography>
            Made with ♥ by maxidragon
                <div>

                </div>
            <IconButton aria-label="GitHubIcon" href="https://github.com/maxidragon/tinymx" target="_blank">
                <GitHubIcon sx={{color: "#fff"}} fontSize="large"/>
            </IconButton>
            <IconButton aria-label="MailIcon" href="mailto:contact@mgala.ml" target="_blank">
                <MailIcon sx={{color: "#fff"}} fontSize="large"/>
            </IconButton>
        </div>
    );
}


export default Footer
