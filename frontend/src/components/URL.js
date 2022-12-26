import React from 'react'
import axios from 'axios'
import ShortURL from './ShortURL'
import NewUrl from './NewUrl'

class URL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shortUrl: [],
            showShortUrl: false
        }
    }
    async getShortURL(url) {
        //add url to db
        const res = await axios.post('http://127.0.0.1:5000/shorten', url)
        //display url on site
        console.log(res.data.shortUrl)
        const shortUrl = res.data.shortUrl
        this.setState({shortUrl})
        this.setState({showShortUrl : true})
    }
    render() {
        return (
            <div>
                <div classname="header">
                    <h1>TinyMX</h1>
                </div>
                <div className="container">
                    <NewUrl onAdd={(url) => this.getShortURL(url)}/>
                    <ShortURL url={this.state.shortUrl} toggle={this.state.showShortUrl}/>
                </div>
            </div>
            )}
}
export default URL

