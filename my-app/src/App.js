import Todo from "./components/Todo";
import Form from "./components/form";
import FilterBtn from "./components/filterBtn";
import React, { useState } from 'react';
import {nanoid} from "nanoid";


function App(props) {
  const [tasks, setTasks]=useState(props.tasks);
  
  function addTask(name){
    const newTask = {id:"todo-"+nanoid(), name:name, completed: false};
    setTasks([...tasks, newTask]);
  }
  
  function delTask(id){
    const remainTasks = tasks.filter(task => id!==task.id);
    setTasks(remainTasks);
  }
  
  function toggle(id){
    let newTasks = tasks.map(
      task=>{
        if(id === task.id){
          return {...task, completed:!task.completed};
        }
        return task;
      }
      );
      setTasks(newTasks);
  }
    
    
  function updateName(id, newName){
    let updatedTask = tasks.map(
      task=>{
        if (id === task.id){ 
          return {...task, name:newName};
        }
        return task;
      });
      setTasks(updatedTask);
    }
    
  const FILTER_MAP={
    all: ()=> true,
    active: task => !task.completed,
    completed: task => task.completed
  };
    
  const FILTER_NAME = Object.keys(FILTER_MAP);
  const [filter, setFilter] = useState("all");
  
  
  const filterList = FILTER_NAME.map(name=>(
    <FilterBtn key={name} name={name} isPressed={name===filter} setFilter={setFilter}/>
  ));

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (<Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id} 
    delTask={delTask}
    toggle={toggle}
    updateName={updateName}/>));
  const headingTex = (taskList.length>1)? "tasks":"task";
  const headingText = `${taskList.length} ${headingTex} remaining`;


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
