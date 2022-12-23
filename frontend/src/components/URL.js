import React from 'react'
import axios from 'axios'
import ShortURL from './ShortURL'
import NewUrl from './NewUrl'

class URL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shortUrl: ''
        }
    }
    async getShortURL(url) {
        //add url to db
        const res = await axios.post('http://127.0.0.1:5000/shorten', url)
            .then(function (res) {
            console.log(res.data.body)
        })
            .catch(function (error) {
                console.log(error)
            });
        //const shortUrl = res.data
        //this.setState({shortUrl})
    }
    render() {
        return (
            <div>
                <NewUrl onAdd={(url) => this.getShortURL(url)}/>
                <ShortURL url={this.state.shortUrl}/>
            </div>
            )}
}
export default URL

