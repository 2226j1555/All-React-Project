import React,{useState} from "react";

function Todoapp(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if(task){
            setTasks([...tasks, { text: task, completed: false}]);
            setTask("");

        }
    };
    const toggleTask = (index) => {
        setTasks((prevTasks) =>
         prevTasks.map((t,i)=>
         i === index ? { ...t,completed:!t.completed }:t
         )
        );

    };

    return(
        <>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((t,index)=> (
                <li key={index} style={{textDecoration: t.completed ? "line-through"  : "none", }} onClick={()=>toggleTask(index)}>{t.text}</li>


            ))}


        </ul>

        </>
    )

}

export default Todoapp;