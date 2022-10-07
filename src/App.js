import React, {useState} from 'react';
import data from "./data.json";
import './App.css';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";



function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
