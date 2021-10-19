import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef } from 'react';
import { label} from './component/data';
import {changeStatusToBacklog, changeStatusToProgress, changeStatusToProduction} from './component/changeStatus';
import TextBox from './component/textBox';
import {useDrop} from 'react-dnd';

function App() {
  const form_ref =useRef()
  const [showAddContentForm, setshowAddContentForm] =useState(false);
  //hide form
  const showForm =()=>{
    setshowAddContentForm(true)
  }

  const hideForm =()=>{
    setshowAddContentForm(false)
  }

  const [drop] =useDrop(()=>({
    
  }))

   return (
    <div className="container">
{/* title of the project */}
     <Header/>

     <div className='row'>
        <div className='col app_bg_color' id='backlog'>
          <h5>{label[0]}</h5>
          <div className="d-grid gap-2">
            <button className='btn btn-secondary btn-sm' onClick={showForm}>+</button>
          </div>
          {showAddContentForm===true?
              <form ref={form_ref}>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder='Title'/>
                  
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="content" placeholder='Content'/>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-primary btn-sm" style={{ marginRight:'10px' }}>Add</button>
                    <button className="btn btn-danger btn-sm" onClick={hideForm}>Cancel</button>
                  </div>
            </form>:''
        
        }
        <br/>
         <TextBox data={changeStatusToBacklog()}/>
          
        </div>
       
         <div className='col app_bg_color' id='progress'>
            <h5>{label[1]}</h5>
            <TextBox data={changeStatusToProgress()}/>
        </div>

        <div className='col app_bg_color' id='production'>
            <h5>{label[2]}</h5>
            <TextBox data={changeStatusToProduction()}/>
            
        </div>
     </div>
    </div>
  );
}

export default App;
