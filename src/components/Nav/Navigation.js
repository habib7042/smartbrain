import React from 'react';
import './nav.css';

const Navigation = ({onRoutChange, isSignedIn}) => {
    	if(isSignedIn){
    		return(
    		<nav className='nav_bar'>
            	<p onClick={()=>onRoutChange('signout')} className ='f3 link dim black underline pa3 pointer'>Sign Out</p>
        	</nav>
        )
    }else{
    	return(
	    	<nav className='nav_bar'>
	            <p onClick={()=>onRoutChange('sinin')} className ='f3 link dim black underline pa3 pointer'>Sign In</p>
	            <p onClick={()=>onRoutChange('signup')} className ='f3 link dim black underline pa3 pointer'>Sign Up</p>
	        </nav>
	    )
    }
        
}

export default Navigation;