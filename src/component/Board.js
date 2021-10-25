import React from 'react'

export default function Board(props) {
    return (
        <div className='d-flex justify-content-around vh-100 flex-wrap'>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'>
                {props.children}
            </div>
            <span className='ms-4'></span>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'>
           
            </div>
            <span className='ms-4'></span>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' >
          
            </div>
            
        </div>
    )
}
