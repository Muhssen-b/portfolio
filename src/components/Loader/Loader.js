import React from 'react'
import Loader from 'react-loader-spinner';

const Loader = () => {
    return (
        <div align = "center">
            <Loader 
                type="puff"
                color= "blue"
                height={100}
                width={100}
                timeout={3000} // 3 seconds
            />
            
        </div>
    )
}

export default Loader
