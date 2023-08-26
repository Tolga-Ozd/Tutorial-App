import axios from 'axios'
import { useEffect, useState } from 'react'

import React from 'react'

const EditTutorial = ({editItem,getTutorials}) => {
    const {id,description : newDescription ,title: newTitle}  = editItem
    const [title, setTitle] = useState(newTitle)
    const [description, setDescription] = useState(newDescription)

    useEffect(() => {
      setTitle(newTitle)
      setDescription(newDescription)
    }, [newTitle,newDescription])
    
    const editTutor = async tutor => {
        const BASE_URL ="https://tutorial-api.fullstack.clarusway.com/tutorials"
        console.log(tutor);
        try {
            await axios.put(`${BASE_URL}/${id}/`, tutor)
        } catch (error) {
            console.log(error);
        }
        getTutorials()
    }


const handleSubmit = (e) => {
    e.preventDefault()
    editTutor({title,description})
}

  return (


<div className="modal fade"
 id="editModal" tabIndex="-1" 
 aria-labelledby="editModal" 
 aria-hidden="true">
  
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-danger" id="editModal">Modal title</h1>
        <button type="button" 
        className="btn-close" 
        data-bs-dismiss="modal"
         aria-label="Close"
         onClick={()=>{
            setDescription("")
            setTitle("")
         }}></button>
      </div>
      <div className="modal-body">
      <form onClick={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='text-center'>
        <button  type="submit" data-bs-dismiss="modal" className="btn btn-danger">
          Save
        </button>
        </div>
       
      </form>
      </div>
     
    </div>
  </div>
</div>
  )
}

export default EditTutorial