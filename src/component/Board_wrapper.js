import React from 'react'

export default function Board_wrapper(props) {
    return (
        <div className='bg-dark px-4'>
            {props.children}
        </div>
    )
}
