import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain-icon-png-2549.png'
import './logo.css'


const Logo = () => {
    return(
        <div className ='main_logo'>
            <Tilt className="Tilt br2 shadow-2 logo" options={{ max : 55 }} >
                <div className="Tilt-inner"> <img style={{paddingTop: '6px'}} src={brain} alt=''/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;