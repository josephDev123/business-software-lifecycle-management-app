import {React, useState} from 'react'
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

export default function Modal({modalProps}) {
      
    const [modal, setModal] = useState(modalProps);
    console.log('modalcomponernt', modalProps);
    return (
      
            <ReactModal isOpen={modal} onRequestClose={()=>setModal(false)}>
                 <h3>Modal Content</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                <button onClick={()=>setModal(false)}>Close</button>
             </ReactModal>
    )
}
