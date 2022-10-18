const [ userInput, setUserInput ] = useState('');
<input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput(“”);

}

const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }