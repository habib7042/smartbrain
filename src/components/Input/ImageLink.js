import React from 'react'
import './imagelink.css'

const ImageLink = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3 main_text'>
                {'Find Who is he/she! Try it.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type ='text' placeholder='Image URL' onChange ={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 div white bg-light-purple'
                    onClick = {onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLink;