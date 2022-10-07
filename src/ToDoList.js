import React from 'react';
import ToDO from "./ToDo"


const ToDoList = ({toDoList}) => {
    return (
        <div >
            {toDoList.map(todo => {
                return (
                    <ToDO todo={todo} />
                )
            })}
        </div>
    )
 

}

export default ToDoList;