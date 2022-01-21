import React from "react";
import Todo from "./Todo";

const TodoList = ({name, toDos, addTask, giveTasktoSomeone}) => {

    return (<>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                {name}
            </div>
            <ul className="list-group list-group-flush">
                {
                    toDos && toDos.map(item=>  <Todo item={item} giveTasktoSomeone={giveTasktoSomeone(name)}/>)
                }
            </ul>
            <div className="card-footer">
            <button type="button" className="btn btn-success" onClick={()=>addTask(name)}>+ Add a task</button>
  </div>
        </div>



    </>)

}


export default TodoList;