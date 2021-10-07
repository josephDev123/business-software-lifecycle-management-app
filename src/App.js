import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef } from 'react';

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

   return (
    <div className="container">
     <Header/>
     <div className='row'>
        <div className='col-sm-3 app_bg_color' id='backlog'>
          <h5>Backlog</h5>
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
          
        </div>
       
        <div className='col-sm-3 app_bg_color' id='progress'>
            <h5>Progress</h5>
        </div>

        <div className='col-sm-3 app_bg_color' id='production'>
            <h5>Production</h5>
        </div>
     </div>
    </div>
  );
}

export default App;
