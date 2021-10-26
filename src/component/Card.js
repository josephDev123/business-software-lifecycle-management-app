import React from 'react'

export default function Card({item}) {
    const backlog = item.filter(filters=> filters.status === 'backlog');

    function handleDrag(e){
     let drag_id = e.dataTransfer.setData('card_id', e.target.id)
     
    }

    return (
        <div>
            {
                  backlog.map(data=>{
                  return(
                    <div className="card" style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} key={data.id} id={data.id}>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.content}</p>
                            
                        </div>
                    </div>
                  ) 
                  
                  })
               }
          
        </div>
    )
}
