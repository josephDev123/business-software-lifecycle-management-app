import React from 'react'

export default function Board({children, data}) {
    let progress = data.filter(item=>item.status ==='progress');
    let production = data.filter(item=>item.status ==='production');

    function handleDrop(e){
        e.preventDefault();
        let card_id = e.dataTransfer.getData('card_id');
        e.target.appendChild(document.getElementById(card_id));
        console.log(e.target.firstElementChild.textContent);

    }

    function handleOver(e){
        e.preventDefault();
       
    }

    function handleDrag(e){
        let drag_id = e.dataTransfer.setData('card_id', e.target.id)
       }

    return (
        <div className='d-flex justify-content-around flex-wrap'>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'  style={{ maxWidth: '300px',maxHeight:'100%' }} onDrop={handleDrop} onDragOver={handleOver}>
                <h4>Backlog</h4>
                {children}
            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
            <h4>Progress</h4>

            {
                  progress.map(data=>{
                  return(
                    <div className="card" style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag}  key={data.id} id={data.id}>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.content}</p>
                            
                        </div>
                    </div>
                  ) 
                  
                  })
               }

            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
            <h4>Production</h4>

            {
                  production.map(data=>{
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
          
        </div>
    )
}
