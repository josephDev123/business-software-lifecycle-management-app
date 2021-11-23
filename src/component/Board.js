import {React, useState} from 'react'
import { changeState } from './container_redux/PostSlice';
import {useDispatch} from 'react-redux';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

export default function Board({children, data}) {
    let dispatch  =useDispatch();
    const [modal, setModal] = useState(false);
    // filter and loop through data that have status of progress
    let progressDataArray = data.map(data=>{
            if(data.status ==='progress'){
                return(
                    <div key={data.id}>
                        <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag}  key={data.id} id={data.id}>
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.content}</p>  
                            </div>
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


// filter and loop through data that have status of production
    let production = data.filter(item=>item.status ==='production');
    let productionDataArray = data.map(data=>{
                    if(data.status ==='production'){
                        return(
                            <div key={data.id}>
                                <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} key={data.id} id={data.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.content}</p>
                                    </div>
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
