import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";

function App() {
  
  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate)=> {
    console.log(`new item ${itemName} date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) =>{
      
      const newTodoItems = todoItems.filter(item => item.name!== todoItemName);
      setTodoItems(newTodoItems);
  }
  return (
    <center className="to-do-container">
      <AppName></AppName>
      <AddTodo  onNewItem={handleNewItem}></AddTodo>
      {todoItems.length ===0 && <Welcomemsg></Welcomemsg> }
      <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}></TodoItems>
     
    </center>
  );
}
export default App;
