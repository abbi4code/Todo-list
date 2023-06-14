import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Newtask({modal,toggle,save}){
    const [taskName, setTaskname] = useState('')
    const [description, setDescription] = useState('')
    //[name,handler]
    //this is used to store the data from the modal and starting it would be empty
    //below handler will take event e as arg
    const handleChange =(e) =>{
        // const name = e.target.name 
        // const value = e.target.value

        const {name, value} = e.target

        if(name=== "taskName"){
            setTaskname(value)
        }else{
            setDescription(value)
        }
    }

        const handleSave = ()=>{
            let taskObj = {}
            // this will push the taskobj in the todolistjsx in saveTask
            taskObj["Name"] = taskName
            taskObj["Discription"] = description
            save(taskObj)
        }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
                <label>Task Name</label>
                {/* we have assign those state to input in value */}
                {/* onchange will work when user put some input so handler will the state to take inputs */}
                <input type="text" className='form-control' value={taskName} onChange={handleChange} name='taskName'/>

            </div>
            <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows="5" value={description} onChange={handleChange} name='description'></textarea>
            </div>

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
           Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
}