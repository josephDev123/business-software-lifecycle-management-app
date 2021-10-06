import React from 'react';
import './component/app.css'
import Header from './component/Header';

function App() {
  return (
    <div className="container">
     <Header/>
     <div className='row'>
        <div className='col-sm-3 app_bg_color' id='backlog'>
          <h5>Backlog</h5>
          <form>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" aria-describedby="title"/>
                 
                </div>
                <div className="mb-3">
                  <label for="content" className="form-label">Content</label>
                  <textarea className="form-control" id="content" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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
