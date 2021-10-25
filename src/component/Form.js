import React, {useState} from 'react';



function Form() {

    const [showForm, setshowForm] = useState(false);

    function show(){
        setshowForm(true);
    }


    function hide(){
        setshowForm(false);
    }

    return (
        <div className='d-flex flex-column mb-2' >
            <button className='btn btn-primary mb-4' onClick={show}>Begin project</button>

            {
            showForm?
            
                <form className='col-6-sm'>
                    <div className="mb-3">
                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder='Title'/>
                    
                    </div>
                    <div className="mb-3">
                    <textarea className="form-control" id="content" placeholder='Content'/>
                    </div>
                    <div className="btn-group">
                    <button className="btn btn-primary btn-sm" style={{ marginRight:'10px' }}>Add</button>
                    <button className="btn btn-danger btn-sm" onClick={hide}>Close</button>
                    </div>
                </form>:''
            }

        </div>
    )
}

export default Form
