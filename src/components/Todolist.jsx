import React, {useEffect, useState} from 'react'
import Newtask from '../Popups/Newtask'
import Card from './Card';

export default function Todolist() {
    const [modal, setModal] = useState(false);
    //below is an array which will store all the task created
    const [taskList, settaskList] = useState([])

    

    // this will store the tasklist in the local storage
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj =JSON.parse(arr)
            settaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        settaskList(tempList)
        window.location.reload()
        //this will reload everytime you del a task
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        settaskList(tempList)
        window.location.reload()
    }

    const toggle =()=>{
        setModal(!modal)
        // it will just perform the opposite of modal state 
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        //we cant store whole arrays into local storage we need to change it to json string
        settaskList(tempList)
        setModal(false)
        // false so the popups stops and pg show our taskss
    }
  return (
    <>
    <div className='header text-center'>
        <h3>To-Do list</h3>
        <button className='btn btn-primary' onClick={()=> setModal(true)}>Create Task</button>
    </div>
    <div className='task-container'>
        {/* here we use index to show differnt color for diff task */}
        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index ={index} deleteTask= {deleteTask} updateListArray={updateListArray}/>)}
    </div>
    <Newtask toggle={toggle} modal={modal} save = {saveTask}/>
    
    </>
  )
}
