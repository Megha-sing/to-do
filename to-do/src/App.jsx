import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "4/10/2025",
    },
    {
      name: "go to dentist",
      dueDate: "4/10/2025",
    },
      {
      name: "finish video",
      dueDate: "13/10/2025",
    },
  ];
  return (
    <center className="to-do-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      
      <TodoItems todoItems={todoItems}></TodoItems>
     
    </center>
  );
}
export default App;
