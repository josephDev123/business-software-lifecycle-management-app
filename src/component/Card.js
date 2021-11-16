import React from 'react'

export default function Card({item}) {
    // const backlog = item.map(filters=> filters.status ==='backlog');
    const backlog = item.status ==='backlog'?item:'';
    console.log(item);

    function handleDrag(e){
     let drag_id = e.dataTransfer.setData('card_id', e.target.id);
     let drag_card = e.target;
    //  console.log(drag_card);
     let card_wrapper =e.target.parentElement.previousElementSibling.parentElement.nextElementSibling;
    //  console.log(card_wrapper);
     e.stopPropagation();
    // setTimeout(()=>{
    //     card_wrapper.removeChild(drag_card);
       
    // }, 100)
 
    }

    return (
    
          
                            <div className="card" data-status={backlog.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} key={backlog.id} id={backlog.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{backlog.title}</h5>
                                    <p className="card-text">{backlog.content}</p>
                                    
                                </div>
                            </div>
          
      
    )
}
