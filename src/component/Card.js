import React from 'react'

export default function Card({item}) {
    const backlog = item.filter(filters=> filters.status === 'backlog');

    return (
        <div>
            {
                  backlog.map(data=>{
                  return(
                    <div className="card" style={{ width: "15rem" }} draggable='true' key={data.id}>
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
