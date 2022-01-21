import React from "react";
import { DIRECTION } from "../constants";



const Todo = ({item, giveTasktoSomeone}) => {

    return (<>
        <li className="list-group-item  d-flex justify-content-between">
        <button type="button" class="btn btn-info" onClick={()=>giveTasktoSomeone(item, DIRECTION.PREV)}>&lt;</button>
            {item}
            <button type="button" class="btn btn-info" onClick={(evt)=>giveTasktoSomeone(item,  DIRECTION.NEXT)} >&gt;</button>
            </li>
    </>)

}


export default Todo;