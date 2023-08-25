import React, { useEffect, useState } from 'react'

const EditTutorial = ({editItem, getTutorials}) => {

    const {id , title:newTitle , description:newDescription} = editItem;
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
      
        setTitle(newTitle);
        setDescription(newDescription)
    
    
    }, [newTitle , newDescription])

    const handleSubmit =(e)=> {
        e.preventDefault()
    }
    

  return (
    <div>
      

<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
       <div className='text-center'>
       <button type="submit" className="btn btn-danger mb-4" onClick={()=>handleSubmit }>
          Save
        </button>
       </div>
      </form>
      </div>
    
    </div>
  </div>
</div>
    </div>
  )
}

export default EditTutorial