import React from 'react';
import { useDrag } from 'react-dnd';
import ITEM_TYPE from './item_type';



export default function TextBox({data}) {
    // react dnd
  const[{isDragging}, drag] = useDrag(()=>({
    type:ITEM_TYPE.type,
    item:{
       id:data
    },
    end: (item, monitor)=>{
            console.log(monitor.getDropResult())
    },
    collect:(monitor)=>({
        isDragging:monitor.isDragging()
    }
    )
  }))
//   
          
        return (
            <div>
                {data.map(item =>{
                    return(
                        <div className="card" ref={drag} style={{width: '18rem', marginBottom:'10px'}} key={item.id} style={{ backgroundColor:isDragging?'red':''}}>
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
