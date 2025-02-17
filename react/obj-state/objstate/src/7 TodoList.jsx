import { useState } from "react";
import { v4 as uuidv4 } from "uuid";//npm i uuid

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample Tasks", id: uuidv4 , isDone:false}]);
  //todos: This state holds an array of todo objects.Each todo object has:tasks,id,isdone

  let [newTodo, setNewTodo] = useState("")
  // newTodo: This state holds the value of the new task being typed in the input field.

  let addNewTask = () => {
    // console.log("add");
    // setTodos([...todos,{task: newTodo, id: uuidv4()}]);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone:false }];
      //The newTodo is used as the task name, and a unique id is generated.
    });
    setNewTodo("");
    //After adding the task, it resets the newTodo state (input field) to an empty string.
  };

  let updateTodoValue = (event) => {
    // console.log(event.target);
    setNewTodo(event.target.value)
    //This function updates the newTodo state when the user types something in the input field. It uses the event.target.value to capture the input value.
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)
//deleteTodo: A function to remove a task from the todos array by filtering out the task with the given id. It uses the filter() method, which creates a new array that excludes the task with the matching id.
    );
  };

  let upperCaseAll= () =>{
    setTodos((prevTodos) =>
    prevTodos.map((todo)=>{
      return{...todo,task:todo.task.toUpperCase(),};
    }));// converts all tasks in the todos list to uppercase. It uses map() to iterate over the todos array, and for each task, it changes the task value to uppercase
  };

  let markAsDone = (id)=>{
    setTodos((prevTodos) =>
      prevTodos.map((todo)=>{
        if(todo.id == id){
        // return{...todo,task:todo.task.toUpperCase(),};
        return{...todo, isDone: true,}
      } else {
        return todo;
      }//markAsDone: This function marks a task as done by setting the isDone property of the specific task to true. It iterates over the todos array and updates the task with the matching id.
      }));

  }

  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
      <br /><br />
      <button onClick={addNewTask}>Add task</button>
      <br /><br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}  }>
                {todo.task}</span>&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => markAsDone(todo.id)}>done</button>
              {/* <button onClick={() => UpperCaseOne(todo.id)}>Uppercase One</button> */}

            </li>
          ))
        }
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCaseAll</button>
      {/* also we can markAsDone */}
    </div>
  )
}