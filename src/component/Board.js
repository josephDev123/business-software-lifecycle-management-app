import React from 'react'

export default function Board(props) {
    return (
        <div className='d-flex justify-content-around vh-100 flex-wrap'>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start'>
                {props.children}
            </div>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start'>
                {props.children}
            </div>
            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start'>
                {props.children}
            </div>
            
        </div>
    )
}
