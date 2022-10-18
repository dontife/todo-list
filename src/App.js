import React, {useState} from 'react';
import data from "./data.json";
import './App.css';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import Form from "./ToDoForm";



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
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <Form addTask={addTask}/> 
    </div>
  );
}

export default App;
