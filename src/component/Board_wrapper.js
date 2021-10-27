import React from 'react'

export default function Boardwrapper(props) {
    return (
        <div className='bg-dark px-4'>
            {props.children}
        </div>
    )
}
