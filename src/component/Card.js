import React from 'react';
import ReactModal from 'react-modal';

export default function Card({item}) {

        let card = item.map(data=>{
            if(data.status === 'backlog'){
            return(
                <div key={data.id}>
                    <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} 
                    key={data.id} id={data.id}>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.content}</p>
                            <ReactModal isOpen={false}>
                                <p>Modal Content</p>
                            </ReactModal>
                            
                        </div>
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
