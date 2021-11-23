import {React, useState} from 'react';
import ReactModal from 'react-modal';
import Modal from './Modal';


export default function Card({item}) {
    
    // const [openModal, setOpenModal] = useState(false);
    const [modal, setModal] = useState(false);
    console.log(modal);
        let card = item.map(data=>{
            if(data.status === 'backlog'){
            return(
                <div key={data.id}>
                    <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} 
                    key={data.id} id={data.id}>
                        <div className="card-body" onClick={()=>setModal(true)} >
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.content}</p>
                        </div>
                        {/* <Modal modalProps={openModal} /> */}
                                    
                        <ReactModal isOpen={modal} onRequestClose={()=>setModal(false)}>
                            <h3>Modal Content</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                            <button onClick={()=>setModal(false)}>Close</button>
                        </ReactModal>
                    </div>
                </div>
              ) 
        }
      
  })

    function handleDrag(e){
     let drag_id = e.dataTransfer.setData('card_id', e.target.id);
     let drag_card = e.target;
     e.stopPropagation();
 
    }

    return (
        <div>
            {card}
        </div>
    )
}
