import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName,setTodoName] = useState("");
  const [todoDate,setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked=()=>{
    onNewItem(todoName,todoDate)
    setTodoName("");
    setTodoDate("");
  };


  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5">
          <input type="text" placeholder="Enter To-do task here" value={todoName} onChange={handleNameChange}></input>
        </div>
        <div className="col-3">
          <input type="date" onChange={handleDateChange} value={todoDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
