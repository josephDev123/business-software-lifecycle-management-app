import {React, useState} from 'react'
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

export default function Boardwrapper(props) {
    const [modal, setModal] = useState(false);

    return (
        <div className='bg-dark px-4'>
            {props.children}
        </div>
    )
}
