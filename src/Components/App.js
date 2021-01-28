import React from 'react'
import Profile from './Profile'
import '../Assets/Styles/App.css'
import logo from '../Assets/Images/pandaLogo.svg'


const App = () => {
    return(
        <div id="app">
            <img src={logo} style={{ height: '60px', margin: '20px'}} alt="logo"/>
            <Profile />
        </div>
    )
}

export default App;