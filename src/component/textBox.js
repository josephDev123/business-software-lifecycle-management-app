import React from 'react'

export default function TextBox({data}) {
  
   
          
        return (
            <div>
                {data.map(item =>{
                    return(
                        <div className="card" style={{width: '18rem'}} key={item.id}>
                            <div className="card-body" >
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>
                            </div>  
                        </div> 
                    ) 
                    }) }
            </div>
       
    )
          
  
}
