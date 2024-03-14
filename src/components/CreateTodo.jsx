import React, { useState } from "react";

const CreateTodo = () => {
  const [task, setTask] = useState(0);
  const [input, setinput] = useState("")

  const handleClick = () => {
    setTask(task + 1); // Increment task count
  };

  const handleChange = (event)=> {

    setinput(event.target.value);
  }

  return (
    <React.Fragment>
      <h1>Task : {task}</h1>
      <input type="text" onChange={handleChange} />
    
      <button onClick={handleClick}value='Add Task Button'>Add task</button>
      <h1> Input : {input}</h1>
    </React.Fragment>
  );
};

export default CreateTodo;
