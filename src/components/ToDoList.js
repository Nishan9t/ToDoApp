import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos ,deleteTodo}) {

 
  

  return (
    <div className="p-4 bg-white">
     
      
      
      {todos.map((todo) => {
        return <Todo todo={todo}  deleteTodo={deleteTodo}/>;
      })}
    </div>
  );
}
