import React from 'react'

export default function Board({children, data}) {
    // filter and loop through data that have status of progress
    let progress = data.filter(item=>item.status ==='progress');
    let progressDataArray = progress.map(data=>{
        return(
          <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag}  key={data.id} id={data.id}>
              <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.content}</p>  
              </div>
          </div>
            )  
            })

// filter and loop through data that have status of production
    let production = data.filter(item=>item.status ==='production');
    let productionDataArray = production.map(data=>{
            return(
            <div className="card" data-status={data.status} style={{ width: "15rem" }} draggable='true' onDragStart={handleDrag} key={data.id} id={data.id}>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.content}</p>
                </div>
            </div>
            ) 
            })


    function handleDrop(e){
        e.preventDefault();
        let card_id = e.dataTransfer.getData('card_id');
        e.target.appendChild(document.getElementById(card_id));
        let board_status = e.target.firstElementChild.textContent;
      
        if(board_status==='Backlog'){
            console.log('backlog');
            data.forEach(element => {
           if (element.id == card_id) {
             element.status='backlog'
           } 
                console.log(data);
            });
           
           
        }else if (board_status=='Progress') {
            console.log('Progress');
            data.forEach(element => { 
           if (element.id == card_id) {
             element.status='progress'
           } 
                console.log(data);
            });

        }else if (board_status=='Production') {
            console.log('Production');
            data.forEach(element => { 
                if (element.id == card_id) {
                  element.status='production'
                } 
                    //  console.log(data);
                 });
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
        <div className='d-flex justify-content-around flex-wrap'>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1'  style={{ maxWidth: '300px',maxHeight:'100%' }} onDrop={handleDrop} onDragOver={handleOver}>
                <h4>Backlog</h4>
                {children}
            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
            <h4>Progress</h4>

                 { progressDataArray }

            </div>

            <span className='ms-4'></span>

            <div className='d-flex flex-column bg-light mb-2 justify-content-start align-items-start px-4 flex-grow-1' style={{ maxWidth: '300px',maxHeight: '100%' }} onDrop={handleDrop} onDragOver={handleOver}>
            <h4>Production</h4>

                 {productionDataArray }
               
            </div>
        </div>
    )
}
