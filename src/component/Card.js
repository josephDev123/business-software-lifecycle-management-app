import {React, useRef, useState, useEffect} from 'react';
import {delete_card, openModal, closeModal} from './container_redux/PostSlice';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import Modal from './Modal';


export default function Card({item}) {
    let dispatch = useDispatch();

        let card = item.map(data=>{
            if(data.status === 'backlog'){
                return(
                    <div key={data.id}>
                        <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} 
                        key={data.id} id={data.id}>
                            <div className="card-body position-relative" onClick={()=>handleOpenModel(data.id)}>
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.content}</p>
                            </div>
                            <button className='btn btn-danger btn-sm position-absolute start-100' style={{ transform:`translate(-25px, 10px)` }} onClick={()=>handleCardDelete(data.id)}>x</button>
                            {/* <button className='btn btn-danger btn-sm position-absolute start-100' style={{ transform:`translateX(-25px)` }} onClick={()=>handleCardDelete(data.id)}> */}
                            <div id="1">         
                                <ReactModal  isOpen={data.modal} onRequestClose={()=>handleCloseModel(data.id)}>
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
                                    <button className='btn btn-danger border' onClick={()=>handleCloseModel(data.id)}>Close</button>
                                </ReactModal>
                            </div>
                            
                        </div>
                    </div>
                ) 
        }
      
  })

  //delete specific card
  function handleCardDelete(id){
      dispatch(delete_card(id));
  }

  function handleOpenModel(id){
      dispatch(openModal(id))
  }

  function handleCloseModel(id){
    dispatch(closeModal(id))
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
