import React from 'react';

const FaceRecognation = ({ imageUrl }) => {
    return (
        <div className ='center ma'>
        	<div className ='absolute mt2'>
        		<img alt='' src = {imageUrl} width ='500px' heigh='auto'/>
        	</div>
        </div>
    );
}

export default FaceRecognation;