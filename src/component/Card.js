import {React, useRef, useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import Modal from './Modal';


export default function Card({item}) {
    const [modal, setModal] = useState(false);

        let card = item.map(data=>{
            if(data.status === 'backlog'){
                return(
                    <div key={data.id}>
                        <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} 
                        key={data.id} id={data.id}>
                            <div className="card-body" onClick={handleOpenModel}>
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.content}</p>
                            </div>
                            <div id="1">         
                                <ReactModal  isOpen={modal} onRequestClose={()=>setModal(false)}>
                                    <div className="card w-75 mx-auto border-primary">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.content}</p>
                                            <br/>
                                            <h5 className="card-title">Comment </h5>
                                            <textarea className='form-control'></textarea>
                                            <br/>
                                            <a href="#" className="btn btn-primary">Comment</a>
                                        </div>
                                    </div>
                                    <button className='btn btn-danger border' onClick={()=>setModal(false)}>Close</button>
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                ) 
        }
      
  })

  function handleOpenModel(e){
    // setModal(true);
    // let elem = e.target.parentElement
    console.log('Hello');
  }

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
