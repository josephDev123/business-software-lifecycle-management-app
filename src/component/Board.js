import React from 'react'

export default function Board(props) {
    return (
        <div className='d-flex justify-content-around flex-wrap'>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'  style={{ maxWidth: '300px',maxHeight:'100%' }} >
                <h4>Backlog</h4>
                {props.children}
            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} >
            <h4>Progress</h4>
              
            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }}>
            <h4>Production</h4>
               
            </div>
            
        </div>
    )
}
