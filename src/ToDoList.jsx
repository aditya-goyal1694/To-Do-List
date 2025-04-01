import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if(newTask.trim() !== '') {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    const deleteTask = (index) => {
        const updatedTask = tasks.filter( (_, i) => i !== index);
        setTasks(updatedTask)
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]

            setTasks(updatedTask)
        }
    }
    
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]

            setTasks(updatedTask)
        }
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div className='input-box'>
                <input 
                type='text'
                placeholder='Add task here'
                value={newTask} 
                onChange={handleInputChange} 
                />

                <button className='add-button' onClick={addTask}>Add Task</button>

                <ol>
                    {tasks.map((task, index) =>
                        <li key = {index}>
                        <span className='text'>{task}</span>

                        <button 
                            className='delete-button' 
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button> 

                        <button 
                            className='move-button' 
                            onClick={() => moveTaskUp(index)}>
                            Move up
                        </button> 

                        <button 
                            className='move-button' 
                            onClick={() => moveTaskDown(index)}>
                            Move down
                        </button> 

                    </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default  ToDoList;