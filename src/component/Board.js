import {React, useState} from 'react'
import { changeState, delete_card, openModal, closeModal } from './container_redux/PostSlice';
import {useDispatch} from 'react-redux';
import ReactModal from 'react-modal';
import Modal from './Modal';

ReactModal.setAppElement(document.getElementById('root'));

export default function Board({children, data}) {
    let dispatch  =useDispatch();
   
    // filter and loop through data that have status of progress
    let progressDataArray = data.map(data=>{
            if(data.status ==='progress'){
                return(
                    <div key={data.id}>
                        <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag}  key={data.id} id={data.id}>
                            <div className="card-body position-relative" onClick={()=>handleOpenModel(data.id)}>
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.content}</p>  
                            </div>
                            <button className='btn btn-danger btn-sm position-absolute start-100' style={{ transform:`translate(-25px, 10px)` }} onClick={()=>handleCardDelete(data.id)}>x</button>
                           {/* modal section */}
                            <ReactModal isOpen={data.modal} onRequestClose={()=>handleCloseModel(data.id)}>
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
                      )  
            }
        
            })


// filter and loop through data that have status of production
    let production = data.filter(item=>item.status ==='production');
    let productionDataArray = data.map(data=>{
                    if(data.status ==='production'){
                        return(
                            <div key={data.id}>
                                <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} key={data.id} id={data.id}>
                                    <div className="card-body position-relative" onClick={()=>handleOpenModel(data.id)}>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.content}</p>
                                    </div>
                                    <button className='btn btn-danger btn-sm position-absolute start-100' style={{ transform:`translate(-25px, 10px)` }} onClick={()=>handleCardDelete(data.id)}>x</button>
                                     {/* modal section */}
                                    <ReactModal isOpen={data.modal} onRequestClose={()=>handleCloseModel(data.id)}>
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
                            ) 
                    }
            })


            function handleCardDelete(id){
                dispatch(delete_card(id));
            }

            function handleOpenModel(id){
                dispatch(openModal(id))
            }
          
            function handleCloseModel(id){
              dispatch(closeModal(id))
          }

    function handleDrop(e){
        e.preventDefault();
        let card_id = e.dataTransfer.getData('card_id');
        e.target.appendChild(document.getElementById(card_id));
        let board_status = e.target.firstElementChild.textContent;
        let card_wrapper =e.target.parentElement;
        document.getElementById(card_id).remove();
        if(board_status==='Backlog'){
            console.log('backlog');
                dispatch(changeState({
                    cardid:card_id,
                    boardStatus:'backlog'
                }))    
           
        }else if (board_status==='Progress') {
            console.log('Progress');
                dispatch(changeState({
                    cardid:card_id,
                    boardStatus:'progress'
                })) 

        }else if (board_status==='Production') {
            console.log('Production');
                dispatch(changeState({
                    cardid:card_id,
                    boardStatus:'production'
                })) 
        }else{
            return '';
        }
    
    }

    function handleOver(e){
        e.preventDefault();
    
    }

    function handleDrag(e){
        let drag_id = e.dataTransfer.setData('card_id', e.target.id);
        e.stopPropagation();
       }

    return (
        <div>
        <div className='d-flex justify-content-around flex-wrap'>
            {/* backlog board */}
            
                <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'  style={{ maxWidth: '300px',maxHeight:'100%' }} onDrop={handleDrop} onDragOver={handleOver}>
                    <h4>Backlog</h4>
                    {children}
                </div>
         
            <span className='ms-4'></span>

        {/* progress board */}
                <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
                <h4>Progress</h4>

                    { progressDataArray }

                </div>

            <span className='ms-4'></span>

            {/* production board */}
                <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
                <h4>Production</h4>

                    {productionDataArray }
                
                </div>
        </div>
      </div> 
    )
}
