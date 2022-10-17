import React, {useState} from 'react';
import data from "./data.json";
import './App.css';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";



function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  // delete completed tasks
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
