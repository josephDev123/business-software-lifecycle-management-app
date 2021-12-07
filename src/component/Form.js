import React, {useState} from 'react';
import {addPost} from './container_redux/PostSlice';
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function Form() {
let dispatch = useDispatch();
    const [showForm, setshowForm] = useState(false);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [github, setGithub] = useState();

    function show(){
        setshowForm(true);
    }

    function hide(){
        setshowForm(false);
    }

    // handle title field
    const handleTitleField =(e)=>{
        
        setTitle(e.target.value)
    }

      // handle content field
      const handleTitleContentField =(e)=>{
        setContent(e.target.value)
    }

       // handle github field
       const handleGithub =(e)=>{
        setGithub(e.target.value)
    }


    // submit form
    const handleAddpost =(e)=>{
        e.preventDefault()
        dispatch(addPost({
            id:uuidv4(),
            status:'backlog',
            title:title,
            content:content,
            github:github,
            modal:false
        }))

    }


    // console.log(title, content);
    return (
        <div className='d-flex flex-column mb-2' >
            <button className='btn btn-primary mb-4' onClick={show}>Begin project</button>

            {
            showForm?
            
                <form className='col-6-sm'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id="title" aria-describedby="title" placeholder='Title' onChange={handleTitleField}/>

                        <span class="input-group-text">Github</span>
                        <input type="text" class="form-control" placeholder="https://github.com/?" aria-label="Https" onChange={handleGithub} ></input>
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" id="content" placeholder='Content' onChange={handleTitleContentField}/>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary btn-sm" style={{ marginRight:'10px' }} onClick={handleAddpost}>Add</button>
                        <button className="btn btn-danger btn-sm" onClick={hide}>Close</button>
                    </div>
                </form>:''
            }

        </div>
    )
}

export default Form
