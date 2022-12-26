import React from 'react'
import './App.css'
import URL from './components/URL'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
    <div className="App">
        <URL />
        <Footer />
    </div>
  )}
}

export default App
